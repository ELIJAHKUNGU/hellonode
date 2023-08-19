const  express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    const courses = [
        {id: 1, name: 'course1'},
        {id: 2, name: 'course2'},
        {id: 3, name: 'course3'},
    ];

    res.status(200).json({status: 'success', data: courses});
});


app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

