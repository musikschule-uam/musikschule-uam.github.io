package main

import (
	"log"
	"os"

	"github.com/evanw/esbuild/pkg/api"
)

type Command string

const (
	CommandServe Command = "serve"
	CommandBuild Command = "build"
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
		result := api.Build(buildOptions)
		for _, err := range result.Errors {
			log.Println(err)
		}
		if len(result.Errors) > 0 {
			os.Exit(1)
		}
	case CommandServe:
		serveOptions := api.ServeOptions{
			Port:     8080,
			Servedir: "www/",
		}
		result, err := api.Serve(serveOptions, buildOptions)
		if err != nil {
			log.Fatal(err)
		}
		result.Wait()

	}

}
