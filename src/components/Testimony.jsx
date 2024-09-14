import {
    Card,
    CardBody,
    Typography,
    CardHeader,
  } from "@material-tailwind/react";
  
  function TestimonialCard({ img, client, title, clientInfo }) {
    return (
      <Card shadow={false} className="bg-green-200 rounded-2xl p-6">
        <CardHeader color="transparent" floated={false} shadow={false}>
          <Typography
            color="black"
            className="lg:mb-20 mb-4 text-2xl font-bold"
          >
            &quot;{title}&quot;
          </Typography>
        </CardHeader>
        <CardBody className="px-4 py-0 flex flex-wrap-reverse gap-x-6 justify-between items-center">
          <div>
            <Typography variant="h6" color="black">
              {client}
            </Typography>
            <Typography
              variant="paragraph"
              className="font-normal !text-gray-500"
            >
              {clientInfo}
            </Typography>
          </div>
          <img src={img} className="max-w-[8rem]" alt={client} />
        </CardBody>
      </Card>
    );
  }
  
  const testimonials = [
    {
      title:
        "Coming to my first Graphic class, I came with a mind of let's see how it goes. It wasn't up to a week before I started thanking God that I did not miss this class.",
      client: "Ganiyu Testimony",
      clientInfo: "Alumni",
      img: "testimony.jpeg",
    },
    {
      title:
        "T.A.D Masterclass was a great trigger for me in the aspect of creativity, learning, consistency and lots more.",
      client: "Oluwatoyin Ajibade",
      clientInfo: "Alumni",
      img: "toyin.jpeg",
    },
    {
      title:
        "A vision that turns strangers to family. It is such an awesome experience learning at Think and Design",
      client: "Joshua Majaro",
      clientInfo: "Alumni",
      img: "joshua.jpeg",
    },
    {
      title:
        "It is a great honour to be part of Think And Design Class.",
      client: "Ayoola Akinshowon",
      clientInfo: "Alumni",
      img: "mummy.jpeg",
    },
  ];
  
  export function Testimony() {
    return (
      <section className="px-8 py-10 lg:py-28">
        <div className="container mx-auto">
          <Typography
            variant="h2"
            className="mb-4 !text-2xl lg:!text-4xl text-blue-900"
          >
            The heartfelt testimonials of our Alumni
          </Typography>
          <Typography
            variant="lead"
            className="max-w-3xl !text-gray-500 mb-10 lg:mb-20"
          >
            From life-enhancing gadgets to unparalleled customer support, and
            transformative learning opportunities.
          </Typography>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
            {testimonials.map((props, key) => (
              <TestimonialCard key={key} {...props} />
            ))}
          </div>
  
          <Card
            shadow={false}
            className="mt-8 bg-red-100 text-center rounded-2xl p-6"
          >
            <CardHeader color="transparent" floated={false} shadow={false}>
              <Typography
                color="black"
                className="mb-4 !text-2xl lg:!text-3xl max-w-4xl !leading-snug mx-auto font-bold"
              >
                &quot;I joined TAD at a time when everything wasn't making sense. My initial intention was to learn, but I ended up forming bonds with many amazing people. Even though the class is over, the bond we have created will always be cherished!&quot;
              </Typography>
            </CardHeader>
            <CardBody className="items-center mx-auto py-2">
              <img
                src="eli.jpeg"
                className="max-w-[8rem] mx-auto grayscale"
                alt="spotify"
              />
              <Typography variant="h6" color="blue">
                Elizabeth Okerokun
              </Typography>
              <Typography
                variant="paragraph"
                className="font-normal !text-gray-500"
              >
                Alumni
              </Typography>
            </CardBody>
          </Card>
        </div>
      </section>
    );
  }
  
  export default Testimony;
  