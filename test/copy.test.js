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

describe('Probar las rutas de los copies', ()=>{
    it('Deberia de crear una copia', (done)=>{
        supertest(app).post('/copies')
        .send({movie:'6441ff627f059a6c9c0013a7',number:'123'})
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
    it('deberia de obtener la lista de copias', (done)=>{
        supertest(app).get('/copies')
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
    it('deberia de encontrar una copia', (done)=>{
        supertest(app).get(`/copies/${id}`)
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
    it('deberia de editar una copia', (done)=>{
        supertest(app).patch(`/copies/${id}`)
        .send({movie:'6441ff627f059a6c9c0013a7',number:'123'})
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
    it('deberia de reemplazar un copia', (done)=>{
        supertest(app).put(`/copies/${id}`)
        .send({movie:'6441ff627f059a6c9c0013a7',number:'123'})
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
    it('eliminar una copia', (done)=>{
        supertest(app).delete(`/copies/${id}`)
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
