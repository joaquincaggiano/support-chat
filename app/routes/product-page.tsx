import type { Route } from "./+types/product-page";

export async function loader({ params }: Route.LoaderArgs) {
  const { name } = params;

  return { name: name.toUpperCase() };
}

const ProductPage = ({ loaderData }: Route.ComponentProps) => {
  const { name } = loaderData;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Página de Producto
      </h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <p className="text-xl text-gray-700">
          <span className="font-semibold">Nombre del producto:</span> {name}
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
