# Taylor API
## Como instalar ?
Para funcionar, basta seguir estes passos:
- Clonar ou baixar este repositório;
- Instalar as dependências da API: ```npm install```
- Iniciar o servidor ```node src/index.js```

Pronto! A API já está pronta para receber suas requisições.

>Lembrando que o banco de dados da API está na plataforma Atlas do MongoDB. Ou seja, na nuvem!
---
## O que tem na API?
Nesta API você vai encontrar informações de todos os álbuns da Taylor Swift.

Todos os **álbuns** possuem as seguintes informações:

| Chave | Valor | 
| ----- | ----- |
| albumName | String com o nome do álbum |
| albumSize | String com a quantidade de músicas no álbum |
|   songs   | Vetor de objetos. Cada objeto possui informações de cada música |
|    url    | String com o link para o álbum no Youtube Music |

Exemplo de json:
``` 
{
    albumName: 'RED',
    albumSize: '16',
    songs: [...],
    url: 'https://music.youtube.com/playlist?list=OLAK5uy_kQ5Efq70Hmk0yNEJCxnpvYNtNP53sGtpE'
}
```
As informações dos objetos de **músicas** são estas:
>Importante ressaltar que *songs* está dentro de *álbuns*. Estou tratando de maneira diferente pois são muitas informações pra uma tabela só.

| Chave | Valor |
| ----- | ----- |
| name | String com o nome da música |
| duration | String com a duração da música |
| description | String com uma breve descrição da música |
| url | String com um link para a música no Youtube Music |

>Tem também campos de id que o mongoDB cria, mas que não nos interessa.

Exemplo de json:

```
{
    ...
    songs: [
        {
            name: 'State of Grace',
            duration: '4:55',
            description: 'A primeira obra de arte do melhor álbum dela',
            url: 'https://music.youtube.com/watch?v=1K7_SvHxgf0&feature=share'
        },
        {
            name: 'Red',
            duration: '3:43',
            description: 'Uma das melhores músicas desse álbum',
            url: 'https://music.youtube.com/watch?v=X_62DIBTPyI&feature=share'
        },
        ...
    ]
}
```

---
## Como consumir a API

Agora que você já viu todas as informações que essa API pode te fornecer, vamos para a parte legal :)

Primeiro de tudo, você precisará de um cliente que faça requisições HTTP. Para este exemplo, usarei o Axios.

- Primeiro instale o Axios: ``` npm install axios ```

- Depois importe ele no seu código: ``` const axios = require('axios') ```

Agora você está pronto!

No momento esta API conta com apenas uma rota para consulta no banco.

A url base é ```http://localhost:8000```

> Pode ser que algum dia este serviço se expande, por isso está em uma tabela hehehe

| Rota | Requisição esperada | Resposta |
| ---- | ------------------- | -------- |
| /listAlbuns | JSON com uma chave "query". Esta chave pode receber os valores 'all' ou o nome de um álbum. *Requisição POST* | Caso ```query: 'all'```, retornará um objeto com todos os álbuns. Caso ```query: 'nomeDoAlbum'```, retornará informações apenas do álbum específicado. *Caso o valor de query seja inválido, retornará um JSON com a chave 'error'.* |

*Os álbuns são:*
>RED, 1989, reputation, Lover, Taylor Swift, Fearless e Speak Now

#### Requisição na prática
Voltando ao Axios, você fará uma requisição POST na rota acima:
``` axios.post('localhost:8000/listAlbuns', { query: 'all' }) ```

Este é um exemplo de requisição de todos os álbuns.

Você consegue acessar a resposta da API através de uma promisse:
```
axios.post('localhost:8000/listAlbuns', { query: 'all' }).then(response => {
    // Todas as informações estão no parâmetro response
    console.log(response) // Exemplo de utilização
})
```
A resposta esperada é este JSON:
>Sim, ele está resumido :P

```
[
  {
    "_id": "5dc463836c45f84c38dc8e6d",
    "albumName": "RED",
    "albumSize": "16",
    "songs": [
      {
        "_id": "5dc463836c45f84c38dc8e7d",
        "name": "State Of Grace",
        "duration": "4:55",
        "description": "A primeira obra de arte do melhor álbum dela",
        "url": "https://music.youtube.com/watch?v=1K7_SvHxgf0&feature=share"
      },
      {
        "_id": "5dc463836c45f84c38dc8e7c",
        "name": "Red",
        "duration": "3:43",
        "description": "Uma das melhores músicas desse álbum",
        "url": "https://music.youtube.com/watch?v=X_62DIBTPyI&feature=share"
      },
      {
        "_id": "5dc463836c45f84c38dc8e7b",
        "name": "Treacherous",
        "duration": "4:02",
        "description": "Uma música pra encher o álbum",
        "url": "https://music.youtube.com/watch?v=RScQbL4Ip-c&feature=share"
      }
      ...
    ]
```
---
#### Obrigado :)
