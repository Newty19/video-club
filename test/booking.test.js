const supertest = require('supertest');
const app = require('../app');
var key = "";
var id = "";

describe('Probar el inicio de sesion', ()=>{
    it('Deberia de obener un login con usuario y contraseña correcto' ,
    (done)=>{
        supertest(app).post('/login')
        .send({
            'email':'ManuelB@gmail.com',
            'password':'1234'
        })
        .expect(200)
        .end(function(err, res){
            key = res.body.obj;
            done();
        });
    });
});

describe('Probar las rutas de los bookings', ()=>{
    it('Deberia de crear un booking', (done)=>{
        supertest(app).post('/bookings')
        .send({copy:'6441ff627f059a6c9c0013a7', member:'64475bc566525a0dcaef4cd0'})
        .set('Authorization', `Bearer ${key}`)
        .end(function(err, res){
            if(err){
                done(err);
            }else{
                id = res.body.objs._id;
                expect(res.statusCode).toEqual(200);
                done();
            }
        })
    })
    it('deberia de obtener la lista de bookings', (done)=>{
        supertest(app).get('/bookings')
        .set('Authorization', `Bearer ${key}`)
        .end(function(err, res){
            if(err){
                done(err);
            }else{
                expect(res.statusCode).toEqual(200);
                done();
            }
        })
    })
    it('deberia de encontrar un booking', (done)=>{
        supertest(app).get(`/bookings/${id}`)
        .set('Authorization', `Bearer ${key}`)
        .end(function(err, res){
            if(err){
                done(err);
            }else{
                expect(res.statusCode).toEqual(200);
                done();
            }
        })
    })
    it('deberia de editar un booking', (done)=>{
        supertest(app).patch(`/bookings/${id}`)
        .send({copy:'6441ff627f059a6c9c0013a7', member:'64475bc566525a0dcaef4cd0'})
        .set('Authorization', `Bearer ${key}`)
        .end(function(err, res){
            if(err){
                done(err);
            }else{
                expect(res.statusCode).toEqual(200);
                done();
            }
        })
    })
    it('deberia de reemplazar un booking', (done)=>{
        supertest(app).put(`/bookings/${id}`)
        .send({copy:'6441ff627f059a6c9c0013a7', member:'64475bc566525a0dcaef4cd0'})
        .set('Authorization', `Bearer ${key}`)
        .end(function(err, res){
            if(err){
                done(err);
            }else{
                expect(res.statusCode).toEqual(200);
                done();
            }
        })
    })
    it('eliminar un booking', (done)=>{
        supertest(app).delete(`/bookings/${id}`)
        .set('Authorization', `Bearer ${key}`)
        .end(function(err, res){
            if(err){
                done(err);
            }else{
                expect(res.statusCode).toEqual(200);
                done();
            }
        })
    })
})
