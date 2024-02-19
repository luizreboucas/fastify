# Como debugar no vsCode

1 - clicar no botão Run and Debug

![image](https://github.com/luizreboucas/fastify/assets/99728452/47329668-bd62-41ca-85a1-1581aab90183)

2 - Clicar em

![image](https://github.com/luizreboucas/fastify/assets/99728452/852c0eb8-fe01-45ed-a435-432ed17d9acb)

3 - arquivo criado

```json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}\\server.js"
        }
    ]
}
```

4 - alterar o caminho do arquivo

![image](https://github.com/luizreboucas/fastify/assets/99728452/1ddb5618-29ca-4b8a-8b7c-1d42693f0592)

