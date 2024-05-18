const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Custom middleware to map URLs
server.use((req, res, next) => {
  const urlMapping = {
    '/api/TrainApp/GetAllStations' : '/GetAllStations',
    '/api/TrainApp/GetAllPassengers': '/GetAllPassengers',
    '/api/TrainApp/AddUpdatePassengers': '/AddUpdatePassengers',
    '/api/TrainApp/login': '/login',
  };

  const mappedUrl = urlMapping[req.url];
  if (mappedUrl) {
    req.url = mappedUrl;
  }

  next();
});

// Set default middlewares (logger, static, cors, and no-cache)
server.use(middlewares);

// Use the router
server.use(router);

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});