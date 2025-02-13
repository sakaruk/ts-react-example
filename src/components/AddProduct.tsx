
import { useForm, SubmitHandler } from "react-hook-form";
import { Product } from '../types/common';
import {  ReducerActions, useProducts } from '../context/ProductContext';
import { CATEGORIES } from '../data/products';


export default function AddProduct() {
    const { products, dispatch } = useProducts();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<Product>({
        defaultValues: {
            id: products.reduce((prevValue, currentValue)=>Math.max(currentValue.id, prevValue),0)
        },
      })
    const onSubmit: SubmitHandler<Product> = (data) => {
        dispatch({type: ReducerActions.ADD, payload: {...data, category_id: Number(data.category_id)}})
        reset()
    }

    return (
        <form style={{display: "flex", gap: "15px", flexDirection: "column"}} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="category_id">Category:</label>
                <select
                    {...register("category_id", { required: true })}
                >
                    <option value="">Select a category</option>
                    {CATEGORIES.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
                {errors.category_id && <span>This field is required</span>}
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input
                    type='number'
                    {...register("price", { required: true })}
                />
                {errors.price && <span>This field is required</span>}
            </div>
            <div>
                <label htmlFor="stocked">Stocked:</label>
                <input
                    type='checkbox'
                    {...register("stocked")}
                />
                
            </div>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    {...register("name", { required: true })}
                />
                {errors.name && <span>This field is required</span>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};