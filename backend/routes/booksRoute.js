import express from 'express';
const router=express.Router();
import { Book } from '../models/bookModel.js';

//To Save a Book
router.post('./', async(request,response)=>{
    try{
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        )
        {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }
        const newBook ={
            title: request.body.title,
            author:request.body.author,
            publishYear:request.body.publishYear,
        };
        const book=await Book.create(newBook);
        return response.status(201).send(book);
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message})
    };
})

//To get all books from the database
router.get('/',async(request,response)=>{
    try {
        const books=await Book.find({});
        return response.status(200).json({
            count: books.length,
            data: books 
        })
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message})
    }
});

//To Get 1 book by Id
router.get('/:id',async(request,response)=>{
    try {
        const {id}=request.params;
        const books=await Book.findById({id});
        return response.status(200).json({
            count: books.length,
            data: books 
        })
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message})
    }
});

//To Update a Book
router.put('/:id',async(request,response)=>{
    try {
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        )
        {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }
        const {id}=request.params();
        const result=await Book.findByIdAndUpdate(id, request.body);
        if(!result){
            return response.status(404).json({message:'Book not found'});
        }
        return response.status(200).json({message:'Book updated succesfully!'});
        
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message})
    }
});

//To delete a book
router.delete('/:id', async(request,response)=>{
    try {
        const {id}=request.params;
        const result=await Book.findByIdAndDelete(id);
        if(!result){
            return response.status(404).json({message:'Book not found'});
        }
        return response.status(200).json({message:'Book deleted succesfully!'});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message}) 
    }
});

export default router;