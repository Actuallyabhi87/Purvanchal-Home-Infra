import React from "react";
import Image from "next/image";

const ProjectSection = () => {
  return (
    <div className="mb-10">
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            PURVANCHAL HOME INFRA PROJECTS
          </h2>
          <div>
            <Image
              alt="project.image"
              src="/images/product.jpg"
              height={500}
              width={1800}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectSection;
