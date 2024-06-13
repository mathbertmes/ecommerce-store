export interface Billboard{
  id: string;
  label: string;
  imageUrl: string;
};

export interface Category{
  id: string;
  name: string;
  billboard: Billboard;
  subCategories: SubCategory[];
};

export interface SubCategory {
  id :         string;
  name:       string;
}

export interface Brand {
  id :         string;
  name:       string;
}

export interface Product{
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  discount: boolean;
  discountPrice?: string;
  size: Size;
  color: Color;
  images: Image[];
}

export interface Image{
  id: string;
  url: string;
}

export interface Sale{
  id:          string
  name:        string
  description?: string
  imageUrl?:    string
  active:      boolean
}

export interface Size{
  id: string;
  name: string;
  value: string;
}

export interface Color{
  id: string;
  name: string;
  value: string;
}

