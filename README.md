api para conversoes https://api.freecurrencyapi.com

### Entidades
##### **Usuário**

Pessoa que utiliza o aplicativo detentor de uma conta. É possível que um usuário tenha uma ou mais carteiras atrelada a sua conta.

##### **Carteira**

Carteira virtual onde se encontram as moedas sob custódia do usuário na blockchain. Moedas do mesmo tipo, porém de carteiras diferentes do mesmo usuário, **não** compartilham saldo.

##### **Moeda**

Um tipo de ativo (token) da blockchain.

##### **Oferta**

Usuários detentores de moedas podem vendê-las por qualquer motivo. Para isto se faz o lançamento de uma oferta, onde se escolhe o preço unitário da moeda e sua quantidade.

#### **Balcão de Ofertas**(funcionalidades da Api)

O balcão de ofertas nada mais é do que uma área onde os usuários do aplicativo possam interagir com as ofertas:

1. Listagem das ofertas do dia atual (ofertas antigas expiram de um dia para o outro)
2. Favoritar ofertas
3. Criar ofertas
4. Deletar ofertas
5. Comprar ofertas


---
---
### Fase 1: API Coding

Para a primeira Sprint, foi estipulado o desenvolvimento do item 1 ao 4 do **Balcão de Ofertas.** Para isso, desenvolva uma RESTful API capaz de responder a requisições feitas pelo aplicativo para os 4 itens do **Balcão de Ofertas:**

1. **Listagem** - listar todas as ofertas do dia
2. **Favoritar oferta** - opção para tornar uma oferta favorita
3. **Criar ofertas** - opção para criar uma nova oferta. Como a criação da oferta depende do saldo de uma moeda em uma carteira que se quer vender, a oferta está diretamente atrelada a uma carteira específica do usuário.
4. **Deletar ofertas** opção para o usuário deletar uma oferta

**Regras de negócio:**

1. A listagem no app acontecerá por paginação ou scroll. O endpoint precisa atender a qualquer um dos 2.
2. A listagem se dará em ordem decrescente de sua data e hora de criação.
3. A informação de _**favorito**_ de constar na listagem das ofertas, de acordo com a perspectiva do usuário atual.
4. Para criar uma oferta para uma moeda de uma carteira, o usuário precisa ter saldo prévio.
5. É possível criar no máximo 5 ofertas por dia, independentemente da carteira, moeda e valor das ofertas passadas.
6. Somente o criador de uma oferta pode deletá-la.
7. Para fins de histórico, o _PO_ solicitou que nenhum dado fosse apagado do banco de dados. Desta forma, o time concordou em utilizar o conceito de _soft-delete_ ao deletar uma oferta.
---
### Modelagem

- Usuário
	- id
	- name
	- email
	- password
	- wallets str_arr
	- created_at
	- updated_at
	- deleted_at
	- active
- Carteira
	- id
	- name
	- currencies obj_arr
		- currency_id
		- qty
	- created_at
	- updated_at
	- deleted_at
- Moeda
	- id
	- name
	- value
	- created_at
	- updated_at
	- deleted_at
- Oferta
	- currency_id
	- currency_qty
	- seller_id
	- buyer_id
	- created_at
	- updated_at
	- deleted_at
	- fullfilled_at

### Techs
- Node
- JWT
- Postgres