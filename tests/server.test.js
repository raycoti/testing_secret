const request = require('supertest-as-promised');
const {expect} = require('chai');
const app = require('../server/start.js');

describe('/api/queries', () => {


  describe('get location', () => {
    it('GET an object with an array of past searches', () =>
      request(app)
      .post('/api/location')
      .send({name: 'chicago'})
      .expect(200)
      .then(res=>{
        expect(res.body).to.contain({name: 'Chicago, IL, USA'})
      } 
      ) 
    )
  })
  describe('get queries', () => {
    it('queries', ()=>{
      request(app)
      
      .get(`/api/queries`)
          .expect(200)
          .then(res => expect(res.body).to.eql({searches:[]}))
    })
  })
})
