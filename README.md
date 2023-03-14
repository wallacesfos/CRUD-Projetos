#API-DOCS


Para rodar na sua máquina você precisára do docker e docker-compose


Assim que instalado você irá rodar o comando

```
docker-compose up
```

assim irá instalar as dependencias e iniciar o projeto.

**/projects /**
  - GET

    Lista todos os projetos, não necessita de nenhum header de autorização.

    ```json
    [
      {
        "id": 1,
        "name": "crud-project"
      }
    ]
    ```


**/projects/:id /**
  - GET

    Lista o projeto com id referente passado na URL, não necessita de nenhum header de autorização.

      ```json
      {
        "id": 1,
        "name": "crud-project"
      }
      ```

**/projects /**
  - POST

    Cria um novo projeto, sendo necessário o nome.

    REQUEST:
    ```json
      {
        "name": "crud-project"
      }
    ```


    RETORNO: 

    ```json
      {
        "name": "crud-project",
        "id": 1
      }
    ```


  **/projects/:id /**
    - PATCH

    Atualiza o nome de um projeto

   REQUEST:
    ```json
    {
	    "name": "juju"
    }
    ```

  **/projects/:id /**
    - DELETE
    
    Delete um projeto.

    RETORNO:
    ```json
    {
      "raw": [],
      "affected": 1
    }
    ```
