import requests
import json

list = [
    {
      "name": "John Doe",
      "image": "assets/img/face.png",
      "description": "It’s great to work with Jovan, every second spent in work with him is like a gift from the sky."
    },
    {
      "name": "Veljko Stanojevic",
      "image": "assets/img/face.png",
      "description": "It’s great to work with Jovan, every second spent in work with him is like a gift from the sky."
    },
    {
      "name": "Jovan Savic",
      "image": "assets/img/face.png",
      "description": "It’s great to work with Jovan, every second spent in work with him is like a gift from the sky."
    }
  ]


for test in list:
    payload = {
        "name": test['name'],
        "image": test['image'],
        "description": test['description']
    }

    instance = requests.post('http://localhost:8802/api/testimonials', {"testimonial_data": json.dumps(payload)})
    print(instance.status_code, instance.content)