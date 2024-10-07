import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Button, InputGroup, FormControl, Form, Spinner, Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function AddProduct() {
    const { productId } = useParams();
    const [imageUrl, setImageUrl] = useState();
    
    const [ loading, setLoading ] = useState(false);
    const [productData, setProductData] = useState({
        Name: '', Price: '', Quantity: '', Image: ''
    });
    const isEditMode = !!productId;
  
    const navigate = useNavigate();

    useEffect(() => {
        if (!isEditMode) return;
    
        getById(productId).then(product => {
          if (!product) return;
          reset(product);
          setImageUrl(product.imageUrl);
        });
    }, [productId]);

    const add = async(productData) => {
        const { Name, Price, Quantity, Image } = productData
        try{
            const response = await axios.post(`http://localhost:3000/api/product`, {
                title: Name,
                price: Price,
                quantity: Quantity,
                image: Image,
            }, {
                headers:{
                    'Content-Type': 'application/json',
                },
            })
            return response
            // if (response.status === 201) {
            //     setLoading(false)
            //     console.log(response)
            // }
        } catch (e){
            console.log("Error while creating product " + e)
        }
    }
    
    const handleContact = async(e) => {
        e.preventDefault();
        setLoading(true)

        const { Name, Price, Quantity, Image } = productData;
        
        if (isEditMode) {
            await update(productData);
            toast.success(`Product "${Name}" updated successfully!`);
            return;
        }
      
        const newProduct = await add(productData);
        toast.success(`Product "${Name}" added successfully!`);
        // navigate('/editProduct/' + newProduct._id, { replace: true });
        console.log(newProduct)
    }

    const formData = [
        {type: 'text', placeholder: 'Product Name', ariaLabel: 'Name', name: 'name', value: productData.Name, onChng: (e) => setProductData({...productData, Name: e.target.value})},
        {type: 'number', placeholder: 'Price', ariaLabel: 'Price', name: 'Price', value: productData.Price, onChng: (e) => setProductData({...productData, Price: e.target.value})},
        {type: 'number', placeholder: 'Enter Quantity', ariaLabel: 'Quantity', name: 'Quantity', value: productData.Quantity, onChng: (e) => setProductData({...productData, Quantity: e.target.value})},
        {type: 'text', placeholder: 'Enter Image Link', ariaLabel: 'Image', name: 'Image', value: productData.Image, onChng: (e) => setProductData({...productData, Image: e.target.value})},
    ]

return (
    <>
        <Container className="p-3 my-5 d-flex flex-column justify-content-center form"
        style={{height: '80vh', width: '65%'}}>
            <h1 className='text-center text-primary fw-bold' 
            style={{paddingBottom: '1rem', borderBottom: '0.28rem solid #0D6EFD'}}>
                Add a Product
            </h1>
            <Form onSubmit={handleContact} className='mt-5'>
                {
                    formData.map((curElm, index) => {
                        const {type, placeholder, ariaLabel, name, value, onChng} = curElm; 
                        return(
                        <Form.Group className="mb-4" key={index}>
                            <InputGroup>
                                <FormControl type={type} placeholder={placeholder} aria-label={ariaLabel} required
                                name={name} value={value} key={index} onChange={onChng}/>
                            </InputGroup>
                        </Form.Group>
                        )
                    })
                }
            <Button type="submit" className="mb-4 w-100 form-control" disabled={loading}>
                {isEditMode ? 'Update' : 'Create'} 
                {loading ? <Spinner animation="border" size="sm" /> : ''}
            </Button>
            </Form>
        </Container>
    </>
)}

export default AddProduct