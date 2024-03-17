const Express = require('express')
const router = Express.Router()

const users = [
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "password123",
    "wallets": ["wallet1", "wallet2"],
    "created_at": "2024-03-06T08:00:00Z",
    "updated_at": "2024-03-06T08:00:00Z",
    "deleted_at": null,
    "active": true
  },
  {
    "id": 2,
    "name": "Alice Smith",
    "email": "alice.smith@example.com",
    "password": "pass456",
    "wallets": ["wallet3", "wallet4"],
    "created_at": "2024-03-06T09:00:00Z",
    "updated_at": "2024-03-06T09:00:00Z",
    "deleted_at": null,
    "active": true
  },
  {
    "id": 3,
    "name": "Bob Johnson",
    "email": "bob.johnson@example.com",
    "password": "secret789",
    "wallets": ["wallet5", "wallet6"],
    "created_at": "2024-03-06T10:00:00Z",
    "updated_at": "2024-03-06T10:00:00Z",
    "deleted_at": null,
    "active": true
  }
]

router.get('/', (req, res) => {
  res.send(users)
  res.end()
})

router.get('/:id', (req, res) => {
  const user = users.filter(user => user.id == req.params.id)
  res.send(user)
  res.end()
})


module.exports = router
