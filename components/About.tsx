export default function About() {
  return (
    <div id="about" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">About New Atlantic Global</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your Trusted Sourcing Partner Since 2014
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-lg leading-8 text-gray-600 mb-6">
                We believe that supplying garments to our buyers is not a matter of supply itself but it involves 
                significant backward linkages and supply chain which includes research and development of products, 
                fabrics and trims selection and sourcing, developing samples and size sets, selecting the right factory, 
                following up with social compliance, health and safety of the workers, maintaining the quality of the 
                products and lastly shipping the goods timely to our buyers.
              </p>
              
              <p className="text-lg leading-8 text-gray-600">
                Considering the present global socio-economic situation we have established a very balanced supply 
                chain to the needs of our buyers in terms of providing quality products while addressing health, 
                security and social aspect of labor which is one of the paramount concerns at present.
              </p>
            </div>
            
            <div>
              <p className="text-lg leading-8 text-gray-600 mb-6">
                We believe our working force is our assets and our main concern is to develop the skills of our 
                working force. We have a team of qualified & efficient merchandisers for handling buyers online. 
                They respond to queries quickly and are very much careful about their feedback and follow up their 
                instructions strongly to meet their desires starting from developing samples to shipment of bulk production.
              </p>
              
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">Our Mission</h3>
                <p className="text-primary-800">
                  To provide a complete solution for our clients beginning from sample making to manufacturing and 
                  shipping the garments to our clients warehouse without compromising with quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
