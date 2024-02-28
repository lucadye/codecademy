const express = require('express'),
      server = express(),
      fs = require('fs'),
      orderData = require('./orders');

server.set('port', process.env.PORT || 3000);

server.get('/',(request,response)=>{
  response.send('Welcome to our simple online order managing web app!');
});


server.get('/orders', (request, response) => {
  response.json(orderData);
});


server.post('/neworder', express.json(), (request, response) => {
  orderData.orders.push(request.body);
  fs.writeFileSync('orders.json', JSON.stringify(orderData));
  response.status(201).send(request.body);
});


server.put('/update/:id', express.text({type: '*/*'}), (request, response) => {
  let items = orderData.orders;
  items.forEach(o => {
    if (o.id === request.params.id) {
      o.state = request.body;
      fs.writeFileSync('orders.json', JSON.stringify(orderData));
      response.send(o);
    }
  })
});


server.delete('/delete/:id', (request, response) => {
  let items = orderData.orders;
  let newData = {'orders': []};
  items.forEach(o => {
    if (o.id !== request.params.id) {
      newData.orders.push(o);
    }
  });

  fs.writeFileSync('orders.json', JSON.stringify(newData));
  response.status(204).send(null);
});


server.listen(3000,()=>{
  console.log('Express server started at port 3000');
});
