import { DeepPartial } from 'typeorm';
import { Category } from '../categories/entities/category.entity';
import { Brand } from '../brands/entities/brand.entity';
import { Role } from '../auth/modules/roles/entities/role.entity';
import { User } from '../auth/modules/users/entities/user.entity';
import { Supplier } from '../suppliers/entities/supplier.entity';
import { Product } from '../products/entities/product.entity';
import { DocumentType } from '../document-types/entities/document-type.entity';

export const rolesData: DeepPartial<Role[]> = [{ name: 'admin' }, { name: 'user' }];

export const usersData: DeepPartial<User[]> = [
  {
    email: 'bryanavalossistemas@gmail.com',
    password: '$2b$10$rCvl1U70EZj/JJbCPpA5Y.88FYbhtJNQMorwdif4iD4po.5W8gVoi',
    isEmailVerified: true,
    profile: {
      name: 'Bryan Avalos',
      picture: 'https://lh3.googleusercontent.com/a/ACg8ocIKcuNAMPV1XgnHpASd_6MnC-6DIduSdITEi9V_hhpKvATUyDQ=s96-c',
    },
    roles: [{ id: 1 }],
  },
];

export const categoriesData: DeepPartial<Category[]> = [
  {
    id: 1,
    name: 'Harinas',
  },
  {
    id: 2,
    name: 'Lácteos',
  },
  {
    id: 3,
    name: 'Carnes',
  },
  {
    id: 4,
    name: 'Frutas y Verduras',
  },
  {
    id: 5,
    name: 'Bebidas',
  },
  {
    id: 6,
    name: 'Snacks',
  },
  {
    id: 7,
    name: 'Conservas',
  },
  {
    id: 8,
    name: 'Aceites y Vinagres',
  },
  {
    id: 9,
    name: 'Condimentos y Especias',
  },
  {
    id: 10,
    name: 'Panadería y Repostería',
  },
  {
    id: 11,
    name: 'Cereales y Granos',
  },
  {
    id: 12,
    name: 'Productos de Limpieza',
  },
  {
    id: 13,
    name: 'Cuidado Personal',
  },
  {
    id: 14,
    name: 'Congelados',
  },
  {
    id: 15,
    name: 'Alimentos para Mascotas',
  },
];

export const brandsData: DeepPartial<Brand[]> = [
  {
    id: 1,
    name: 'Anita',
  },
  {
    id: 2,
    name: 'Gloria',
  },
  {
    id: 3,
    name: 'Laive',
  },
  {
    id: 4,
    name: 'Nestlé Perú',
  },
  {
    id: 5,
    name: 'Alicorp',
  },
  {
    id: 6,
    name: 'Molitalia',
  },
  {
    id: 7,
    name: 'San Fernando',
  },
  {
    id: 8,
    name: 'Costa',
  },
  {
    id: 9,
    name: 'Pilsen Callao',
  },
  {
    id: 10,
    name: 'Backus',
  },
  {
    id: 11,
    name: 'Cusqueña',
  },
  {
    id: 12,
    name: 'Inka Crops',
  },
  {
    id: 13,
    name: 'Tottus',
  },
  {
    id: 14,
    name: 'Don Vittorio',
  },
  {
    id: 15,
    name: 'La Ibérica',
  },
];

export const suppliersData: DeepPartial<Supplier[]> = [
  {
    id: 1,
    name: 'Alicorp S.A.A',
    type: 'RUC',
    document: '20100055237',
  },
  {
    id: 2,
    name: 'Bryan Avalos Loa y Pardo',
    type: 'DNI',
    document: '75013015',
  },
  {
    id: 3,
    name: 'Gloria S.A.',
    type: 'RUC',
    document: '20100012345',
  },
  {
    id: 4,
    name: 'María López Pérez',
    type: 'DNI',
    document: '45678923',
  },
  {
    id: 5,
    name: 'San Fernando S.A.',
    type: 'RUC',
    document: '20100067890',
  },
  {
    id: 6,
    name: 'Carlos Gutiérrez Rojas',
    type: 'DNI',
    document: '87654321',
  },
  {
    id: 7,
    name: 'Molitalia S.A.',
    type: 'RUC',
    document: '20100098765',
  },
  {
    id: 8,
    name: 'Lucía Mendoza Torres',
    type: 'DNI',
    document: '23456789',
  },
  {
    id: 9,
    name: 'Laive S.A.',
    type: 'RUC',
    document: '20100054321',
  },
  {
    id: 10,
    name: 'Jorge Díaz Salazar',
    type: 'DNI',
    document: '76543210',
  },
  {
    id: 11,
    name: 'Nestlé Perú S.A.',
    type: 'RUC',
    document: '20100011223',
  },
  {
    id: 12,
    name: 'Ana Castillo Ruiz',
    type: 'DNI',
    document: '32165498',
  },
  {
    id: 13,
    name: 'Inka Crops S.A.',
    type: 'RUC',
    document: '20100033445',
  },
  {
    id: 14,
    name: 'Pedro Vargas Morales',
    type: 'DNI',
    document: '98765432',
  },
  {
    id: 15,
    name: 'Tottus S.A.',
    type: 'RUC',
    document: '20100055667',
  },
];

export const productsData: DeepPartial<Product[]> = [
  {
    id: 1,
    name: 'Harina Anita Pastelera x 50kg',
    stock: 10,
    costPrice: 50,
    salePrice: 72.5,
    categoryId: 1, // Harinas
    brandId: 1, // Anita
  },
  {
    id: 2,
    name: 'Leche Gloria Entera x 1L',
    stock: 50,
    costPrice: 3.8,
    salePrice: 4.5,
    categoryId: 2, // Lácteos
    brandId: 2, // Gloria
  },
  {
    id: 3,
    name: 'Yogurt Laive Natural x 1kg',
    stock: 30,
    costPrice: 6.5,
    salePrice: 8.0,
    categoryId: 2, // Lácteos
    brandId: 3, // Laive
  },
  {
    id: 4,
    name: 'Pollo San Fernando Entero x 1.5kg',
    stock: 20,
    costPrice: 12.0,
    salePrice: 15.0,
    categoryId: 3, // Carnes
    brandId: 7, // San Fernando
  },
  {
    id: 5,
    name: 'Manzana Roja x 1kg',
    stock: 100,
    costPrice: 4.0,
    salePrice: 5.5,
    categoryId: 4, // Frutas y Verduras
    brandId: null, // Sin marca
  },
  {
    id: 6,
    name: 'Gaseosa Inca Kola x 3L',
    stock: 40,
    costPrice: 5.0,
    salePrice: 7.0,
    categoryId: 5, // Bebidas
    brandId: 11, // Cusqueña (asociada a Inca Kola)
  },
  {
    id: 7,
    name: "Papas Fritas Lay's Clásicas x 150g",
    stock: 60,
    costPrice: 2.5,
    salePrice: 4.0,
    categoryId: 6, // Snacks
    brandId: null, // Lay's (no es peruana, pero común en Perú)
  },
  {
    id: 8,
    name: 'Atún Costa en Aceite x 170g',
    stock: 25,
    costPrice: 4.5,
    salePrice: 6.0,
    categoryId: 7, // Conservas
    brandId: 8, // Costa
  },
  {
    id: 9,
    name: 'Aceite Primor x 1L',
    stock: 35,
    costPrice: 8.0,
    salePrice: 10.0,
    categoryId: 8, // Aceites y Vinagres
    brandId: 5, // Alicorp (Primor es una marca de Alicorp)
  },
  {
    id: 10,
    name: 'Azúcar Rubia Incauca x 1kg',
    stock: 70,
    costPrice: 3.0,
    salePrice: 4.5,
    categoryId: 11, // Cereales y Granos
    brandId: 12, // Inka Crops
  },
  {
    id: 11,
    name: 'Detergente Bolívar x 1kg',
    stock: 45,
    costPrice: 6.0,
    salePrice: 8.0,
    categoryId: 12, // Productos de Limpieza
    brandId: 5, // Alicorp (Bolívar es una marca de Alicorp)
  },
  {
    id: 12,
    name: 'Jabón Lux x 120g',
    stock: 80,
    costPrice: 1.5,
    salePrice: 2.5,
    categoryId: 13, // Cuidado Personal
    brandId: null, // Lux (no es peruana, pero común en Perú)
  },
  {
    id: 13,
    name: 'Helado Donofrio Vainilla x 1L',
    stock: 15,
    costPrice: 10.0,
    salePrice: 12.5,
    categoryId: 14, // Congelados
    brandId: 4, // Nestlé Perú (Donofrio es una marca de Nestlé)
  },
  {
    id: 14,
    name: 'Comida para Perro Raza Pequeña x 3kg',
    stock: 20,
    costPrice: 25.0,
    salePrice: 30.0,
    categoryId: 15, // Alimentos para Mascotas
    brandId: 5, // Alicorp (Raza es una marca de Alicorp)
  },
  {
    id: 15,
    name: 'Galletas Margarita Clásicas x 150g',
    stock: 50,
    costPrice: 2.0,
    salePrice: 3.5,
    categoryId: 10, // Panadería y Repostería
    brandId: 5, // Alicorp (Margarita es una marca de Alicorp)
  },
];

export const documentTypesData: DeepPartial<DocumentType[]> = [
  {
    name: 'factura',
    isLegal: true,
  },
  {
    name: 'boleta',
    isLegal: true,
  },
];
