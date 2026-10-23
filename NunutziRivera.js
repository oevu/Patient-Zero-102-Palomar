import React, { useState } from 'react';
import { Clock, Users, ArrowLeft, Utensils, CheckCircle2, ChefHat } from 'lucide-react';

// 1. Datos estáticos de las recetas (Hardcoded)
const recetas = [
  {
    id: 1,
    titulo: 'Tacos al Pastor',
    tiempo: '45 min',
    porciones: '4 personas',
    imagen: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    ingredientes: [
      '1 kg de carne de cerdo en bistec',
      '3 chiles guajillo y 2 chiles anchos desvenados',
      '1/2 cebolla y 2 dientes de ajo',
      '1 taza de jugo de piña',
      'Tortillas de maíz',
      'Piña, cilantro y cebolla picada al gusto'
    ],
    instrucciones: [
      'Hierve los chiles en agua caliente durante 10 minutos y licúalos con el ajo, la cebolla, el jugo de piña y una pizca de sal.',
      'Baña la carne de cerdo con esta mezcla y déjala marinar en el refrigerador por al menos 2 horas para que absorba el sabor.',
      'Fríe la carne marinada en un sartén bien caliente con un poco de aceite hasta que esté dorada y bien cocida. Córtala en tiras pequeñas.',
      'Calienta las tortillas de maíz, sirve la carne y acompaña con trozos de piña, cilantro, cebolla y tu salsa favorita.'
    ]
  },
  {
    id: 2,
    titulo: 'Guacamole Clásico',
    tiempo: '15 min',
    porciones: '2 personas',
    imagen: 'https://laroussecocina.mx/wp-content/uploads/2017/12/guacamole-clasico-001-larousse-cocina.jpg',
    ingredientes: [
      '3 aguacates Hass maduros',
      '1/2 cebolla blanca picada finamente',
      '1 jitomate picado sin semillas',
      '1 chile serrano picado (opcional)',
      '1/4 de taza de cilantro fresco picado',
      'Jugo de 1 limón y sal al gusto'
    ],
    instrucciones: [
      'Corta los aguacates por la mitad, retira el hueso y extrae toda la pulpa con una cuchara. Colócala en un tazón amplio.',
      'Usa un tenedor o un machacador para aplastar el aguacate hasta obtener la consistencia deseada (puede ser rústico con trozos o muy suave).',
      'Agrega la cebolla, el jitomate, el chile serrano y el cilantro. Exprime el jugo de limón sobre la mezcla y añade sal al gusto.',
      'Mezcla todos los ingredientes de manera envolvente. Sirve inmediatamente acompañado de totopos o utilízalo como guarnición.'
    ]
  }
];

export default function App() {
  const [recetaActiva, setRecetaActiva] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        
        {/* Cabecera Principal */}
        {!recetaActiva && (
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <ChefHat className="text-orange-500 w-10 h-10" />
              Recetario Gourmet
            </h1>
            <p className="text-gray-500 text-lg">Descubre platillos increíbles y fáciles de preparar.</p>
          </div>
        )}

        {/* Vista de Cuadrícula (Tarjetas) */}
        {!recetaActiva ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recetas.map((receta) => (
              <div 
                key={receta.id} 
                onClick={() => setRecetaActiva(receta)}
                className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Imagen de la Tarjeta */}
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all z-10"></div>
                  <img 
                    src={receta.imagen} 
                    alt={receta.titulo} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                </div>
                
                {/* Contenido de la Tarjeta */}
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {receta.titulo}
                  </h2>
                  
                  <div className="flex items-center gap-6 text-gray-500 mb-6 font-medium">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-orange-400" />
                      <span>{receta.tiempo}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-orange-400" />
                      <span>{receta.porciones}</span>
                    </div>
                  </div>
                  
                  <button className="w-full py-3 px-4 bg-orange-50 hover:bg-orange-500 text-orange-600 hover:text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2">
                    <Utensils className="w-5 h-5" />
                    Ver Receta
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          
          /* Vista de Detalle de Receta */
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500">
            {/* Botón de Regresar */}
            <div className="p-6 md:p-8 pb-0">
              <button 
                onClick={() => setRecetaActiva(null)}
                className="flex items-center gap-2 text-gray-500 hover:text-orange-600 font-semibold transition-colors bg-gray-50 hover:bg-orange-50 px-4 py-2 rounded-full w-fit"
              >
                <ArrowLeft className="w-5 h-5" />
                Regresar a recetas
              </button>
            </div>

            {/* Imagen Principal (Hero) */}
            <div className="p-6 md:p-8">
              <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-md mb-8">
                <img 
                  src={recetaActiva.imagen} 
                  alt={recetaActiva.titulo} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Título y Metadatos */}
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                {recetaActiva.titulo}
              </h2>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-2 rounded-full font-bold">
                  <Clock className="w-5 h-5" />
                  <span>Tiempo: {recetaActiva.tiempo}</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-bold">
                  <Users className="w-5 h-5" />
                  <span>Porciones: {recetaActiva.porciones}</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                {/* Ingredientes */}
                <div className="md:col-span-1 bg-gray-50 p-6 rounded-2xl h-fit border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Ingredientes</h3>
                  <ul className="space-y-4">
                    {recetaActiva.ingredientes.map((ingrediente, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700 font-medium">
                        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                        <span className="leading-tight">{ingrediente}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Instrucciones */}
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Instrucciones de Preparación</h3>
                  <div className="space-y-8">
                    {recetaActiva.instrucciones.map((paso, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg shadow-md">
                          {index + 1}
                        </div>
                        <p className="text-lg text-gray-600 leading-relaxed pt-1">
                          {paso}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}