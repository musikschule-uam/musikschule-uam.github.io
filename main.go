package main

import (
	"io/ioutil"
	"log"
	"os"
	"os/exec"

	"github.com/evanw/esbuild/pkg/api"
)

type Command string

const (
	CommandServe  Command = "serve"
	CommandBuild  Command = "build"
	CommandDeploy Command = "deploy"
)

func main() {
	args := os.Args[1:]
	command := CommandBuild
	if len(args) >= 1 {
		command = Command(args[0])
	}

	buildOptions := api.BuildOptions{
		EntryPoints: []string{"src/index.ts"},
		Loader: map[string]api.Loader{
			".css": api.LoaderText,
		},
		Outdir:    "www/js",
		Splitting: true,
		Format:    api.FormatESModule,
		Bundle:    true,
		Write:     true,
		LogLevel:  api.LogLevelInfo,
	}

	switch command {
	case CommandBuild:
		build(buildOptions)
	case CommandServe:
		serve(buildOptions)
	case CommandDeploy:
		opts := DeployOptions{}
		opts.ScanEnv()
		deploy(opts)
	}

}

func build(opts api.BuildOptions) {
	result := api.Build(opts)
	for _, err := range result.Errors {
		log.Println(err)
	}
	if len(result.Errors) > 0 {
		os.Exit(1)
	}
}

func serve(opts api.BuildOptions) {
	serveOptions := api.ServeOptions{
		Port:     8080,
		Servedir: "www/",
	}
	result, err := api.Serve(serveOptions, opts)
	if err != nil {
		log.Fatal(err)
	}
	result.Wait()
}

type DeployOptions struct {
	Repo         string
	Token        string
	TargetBranch string
}

func (opts *DeployOptions) ScanEnv() {
	opts.Repo = os.Getenv("DEPLOY_REPO")
	opts.Token = os.Getenv("DEPLOY_TOKEN")
	opts.TargetBranch = os.Getenv("DEPLOY_TARGETBRANCH")
}

func deploy(opts DeployOptions) {
	dir, err := ioutil.TempDir("./", "deploy")
	if err != nil {
		log.Fatal(err)
	}
	defer os.RemoveAll(dir)

	mustExec(dir, "git", "config", "--local", "user.name", "deployer")
	mustExec(dir, "git", "config", "--local", "user.email", "deployer@musikschule-uam.de")
	mustExec(dir, "git", "config", "--local", "user.password", opts.Token)

	mustExec(dir, "git", "clone", "-b", opts.TargetBranch, opts.Repo, ".")
	mustExec(dir, "rm", "-rf", "*")
	// restore github workflows for ionos
	mustExec(dir, "git", "checkout", ".github")

	workdir, err := os.Getwd()
	if err != nil {
		log.Fatal(err)
	}
	mustExec(dir, "cp", "-r", workdir+"/www/.", ".")
	mustExec(dir, "git", "add", ".")
	mustExec(dir, "git", "commit", "-m", "deploy")
	mustExec(dir, "git", "push")
}

func mustExec(workdir string, name string, args ...string) {
	cmd := exec.Command(name, args...)
	cmd.Dir = workdir
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	err := cmd.Run()
	if err != nil {
		log.Fatal(err)
	}
}
