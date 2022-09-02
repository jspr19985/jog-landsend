# jog-landsend
### CSS animation of a journey from John O' Groats to Land's End.

<img width="1656" alt="Screenshot 2022-08-02 at 21 30 19" src="https://user-images.githubusercontent.com/17809022/182467738-78c75d63-3b5b-48a7-9387-67282857d43e.png">

## Run

**Install [http-server](https://www.npmjs.com/package/http-server)**   
```brew install http-server```

**Change into working directory if not already in it**   
```cd jog-landsend```

**Start http server**   
```http-server -c-1```

**Access**   
```http://localhost:8080```  

Also found at https://codepen.io/jsp123/project/full/ZRbjpz

## Count files

As there are only `50` files allowed by codepen, it may be necessary to count the files created. From the root run:   
`find . -type f -not -path '*/.*' | wc -l`

(there are a couple extra files in main project `generateGradient.js` and `favicon.ico`).
