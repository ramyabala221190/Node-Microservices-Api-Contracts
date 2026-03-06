import mongoose from "mongoose"

export interface ProductPayload {
    id:number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: string[],
    brand?: string | null, //can be string/null
    sku: string,
    weight: number,
    dimensions: {
        width: number,
        height: number,
        depth: number
    },
    warrantyInformation: string,
    shippingInformation: string,
    availabilityStatus: string,
    reviews: {
        _id:mongoose.Types.ObjectId,
        rating: number,
        comment: string,
        date: Date,
        reviewerName: string,
        reviewerEmail: string
    }[],
    returnPolicy: string,
    minimumOrderQuantity: number,
    meta: {
        createdAt: Date,
        updatedAt: Date,
        barcode: string,
        qrCode: string
    },
    images: string[],
    thumbnail: string, 
}

export interface ProductModel {
    _id: mongoose.Types.ObjectId,
    id:number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: string[],
    brand?: string | null, //can be string/null
    sku: string,
    weight: number,
    dimensions: {
        width: number,
        height: number,
        depth: number
    },
    warrantyInformation: string,
    shippingInformation: string,
    availabilityStatus: string,
    reviews: {
        _id:mongoose.Types.ObjectId,
        rating: number,
        comment: string,
        date: Date,
        reviewerName: string,
        reviewerEmail: string
    }[],
    returnPolicy: string,
    minimumOrderQuantity: number,
    meta: {
        createdAt: Date,
        updatedAt: Date,
        barcode: string,
        qrCode: string
    },
    images: string[],
    thumbnail: string,
    createdAt:Date, //this will be added by schema so need to add to interface
    updatedAt:Date  // this will be added by schema so need to add to interface
}

export interface ReviewModel {
    _id:mongoose.Types.ObjectId,
    rating: number,
    comment: string,
    date: Date,
    reviewerName: string,
    reviewerEmail: string
}
