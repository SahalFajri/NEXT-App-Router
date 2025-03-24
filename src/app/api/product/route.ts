import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Nike Air Max Dn8",
    price: 3049000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/59ff827c-5672-4657-9eca-0179dfe206c3/AIR+MAX+DN8.png",
  },
  {
    id: 2,
    title: "Nike Pegasus Premium",
    price: 3299000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/81711d75-ce61-4233-b76e-a133d7a0cae8/NIKE+PEGASUS+PREMIUM.png",
  },
  {
    id: 3,
    title: "Nike Vomero 18",
    price: 2249000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/88c35e4e-9a89-4ced-8247-c194da41b173/NIKE+VOMERO+18.png",
  },
  {
    id: 4,
    title: "Nike Vomero 18",
    price: 2249000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/88c35e4e-9a89-4ced-8247-c194da41b173/NIKE+VOMERO+18.png",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));
    if (detailProduct) {
      return NextResponse.json({ status: 200, message: "Success", data: detailProduct });
    }

    return NextResponse.json({ status: 404, message: "Not Found", data: {} });
  }

  return NextResponse.json({ status: 200, message: "Success", data });
}