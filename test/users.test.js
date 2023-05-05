const supertest = require('supertest');
const app = require('../app');
var key = "";

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

describe('Probar las rutas de usuarios', ()=>{
    it('Deberia de crear un usuario', (done)=>{
        supertest(app).post('/users')
        .send({
            name: "Eduardo",
            lastName: "Rodriguez",
            email: "prueba@live.com",
            password: "123"
        })
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
    it('deberia de obtener la lista usuarios', (done)=>{
        supertest(app).get('/users')
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
    it('deberia de encontrar un usuario', (done)=>{
        supertest(app).get(`/users/show/${id}`)
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
    it('deberia de editar un usuario', (done)=>{
        supertest(app).patch(`/users/${id}`)
        .send({
            name: "Eduardo",
            lastName: "Rodriguez",
            email: "prueba@live.com",
            password: "123"
        })
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
    it('deberia de reemplazar un usuario', (done)=>{
        supertest(app).put(`/users/${id}`)
        .send({
            name: "Eduardo",
            lastName: "Rodriguez",
            email: "prueba@live.com",
            password: "123"
        })
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
    it('eliminar un usuario', (done)=>{
        supertest(app).delete(`/users/${id}`)
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

