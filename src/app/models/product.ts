export interface Product {
	_id: number;
	product_name: string;
	supplierId: number;
	categoryId: number;
	reviewId: number;
	catalogue_number: string;
	short_description: string;
	long_description: string;
	product_image: string;
	price: number;
	availability: boolean;
	quantity: number;
	in_wishlist: boolean;
	in_compare: boolean;
	in_cart: boolean;
	made_in_country: string;
	on_sale: string;
	climate_friendly: string;
	delivery_slot: string;
	price_per_weight: string;
	diet_type: string;
	size: string;
	number_of_items: string;
	format: string;
	type: string;
	flavour: string;
}
