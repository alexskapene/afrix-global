
import { Card, CardTitle, CardDescription, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function PublicationSection() {
    return (
        <section className="py-16 bg-gray-100">
            <div className="text-center mb-14">
                <h4 className="text-blue-600 font-semibold tracking-wide uppercase">
                    Publications
                </h4>
                <h2 className="text-3xl md:text-4xl font-bold text-black">
                    Nos recentes publications
                </h2>
            </div>
            <div className="container mx-auto px-4">
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <Card className="group overflow-hidden rounded-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                            <CardHeader>

                                {/* IMAGE + GRADIENT */}
                                <div className="h-48 relative rounded-t-lg overflow-hidden">

                                    {/* Image */}
                                    <Image
                                        src="/images/service1.jpg"
                                        alt="Service illustration"
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                        priority
                                    />

                                    {/* Dégradé bleu au hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent
                                        opacity-0 group-hover:opacity-200
                                        transition-opacity duration-700 ease-out"
                                    />
                                </div>

                            </CardHeader>

                            <CardDescription className="p-4">
                                <p className="text-sm text-gray-500 mb-2">Publié le <span className="text-sky">25 Nov 2025</span></p>

                                <CardTitle className="text-lg font-semibold text-gray-900">
                                    Titre de la publication 1
                                </CardTitle>

                                <CardDescription className="text-sm text-gray-600 mt-2">
                                    Brève description de la publication 1. Découvrez les dernières tendances et analyses.
                                </CardDescription>

                                <div className="pt-4">
                                    <Button
                                        size="lg"
                                        className="text-lg px-8 py-6 bg-blue-500 transition-all duration-300 hover:bg-blue-600"
                                    >
                                        Voir Plus
                                    </Button>
                                </div>
                            </CardDescription>
                        </Card>
                        <Card className="group overflow-hidden rounded-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                            <CardHeader>

                                {/* IMAGE + GRADIENT */}
                                <div className="h-48 relative rounded-t-lg overflow-hidden">

                                    {/* Image */}
                                    <Image
                                        src="/images/service1.jpg"
                                        alt="Service illustration"
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                        priority
                                    />

                                    {/* Dégradé bleu au hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent
                                        opacity-0 group-hover:opacity-100
                                        transition-opacity duration-700 ease-out"
                                    />
                                </div>

                            </CardHeader>

                            <CardDescription className="p-4">
                                <p className="text-sm text-gray-500 mb-2">Publié</p>

                                <CardTitle className="text-lg font-semibold text-gray-900">
                                    Titre de la publication 1
                                </CardTitle>

                                <CardDescription className="text-sm text-gray-600 mt-2">
                                    Brève description de la publication 1. Découvrez les dernières tendances et analyses.
                                </CardDescription>

                                <div className="pt-4">
                                    <Button
                                        size="lg"
                                        className="text-lg px-8 py-6 bg-blue-500 transition-all duration-300 hover:bg-blue-600"
                                    >
                                        Voir Plus
                                    </Button>
                                </div>
                            </CardDescription>
                        </Card>

                        <Card className="group overflow-hidden rounded-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                            <CardHeader>

                                {/* IMAGE + GRADIENT */}
                                <div className="h-48 relative rounded-t-lg overflow-hidden">

                                    {/* Image */}
                                    <Image
                                        src="/images/service1.jpg"
                                        alt="Service illustration"
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                        priority
                                    />

                                    {/* Dégradé bleu au hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent
                                        opacity-0 group-hover:opacity-100
                                        transition-opacity duration-700 ease-out"
                                    />
                                </div>

                            </CardHeader>

                            <CardDescription className="p-4">
                                <p className="text-sm text-gray-500 mb-2">Publié</p>

                                <CardTitle className="text-lg font-semibold text-gray-900">
                                    Titre de la publication 1
                                </CardTitle>

                                <CardDescription className="text-sm text-gray-600 mt-2">
                                    Brève description de la publication 1. Découvrez les dernières tendances et analyses.
                                </CardDescription>

                                <div className="pt-4">
                                    <Button
                                        size="lg"
                                        className="text-lg px-8 py-6 bg-blue-500 transition-all duration-300 hover:bg-blue-600"
                                    >
                                        Voir Plus
                                    </Button>
                                </div>
                            </CardDescription>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}