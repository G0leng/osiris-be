module.exports = {
  "routes": [
    {
      "method": "POST",
      "path": "/email-send",
      "handler": "email.send",
      "config": {
        "policies": []
      }
    }
  ]
};
