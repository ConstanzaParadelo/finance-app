const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) {
            return res.send(err);
        }
        conn.query('SELECT * FROM administracion', (err, rows) => {
            if(err) {
                return res.send(err);
            }
            res.json(rows);
        });
    })
});

const getMoves = routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) {
            return res.send(err);
        }
        conn.query('SELECT * FROM administracion', (err, rows) => {
            if(err) {
                return res.send(err);
            }
            res.json(rows);
        });
    })
});

routes.get('/balance', (req, res) => {
    res.send('getMoves');
});

routes.post('/', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) {
            return res.send(err);
        }
        conn.query('INSERT INTO administracion set ?', [req.body], (err, rows) => {
            if(err) {
                return res.send(err);
            }
            res.send('moveList inserted');
        });
    })
});

routes.delete('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) {
            return res.send(err);
        }
        conn.query('DELETE FROM administracion WHERE id = ?', [req.params.id], (err, rows) => {
            if(err) {
                return res.send(err);
            }
            res.send('moveList deleted');
        });
    })
});

routes.put('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) {
            return res.send(err);
        }
        conn.query('UPDATE administracion set ? where id = ?', [req.body, req.params.id], (err, rows) => {
            if(err) {
                return res.send(err);
            }
            res.send('moveList updated');
        });
    })
});


module.exports = routes;