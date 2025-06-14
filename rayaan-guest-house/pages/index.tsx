
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="bg-[url('/hero.jpg')] bg-cover bg-center h-[60vh] flex items-center justify-center text-white text-center px-4">
        <div className="bg-black bg-opacity-60 p-6 rounded-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Rayaan Guest House</h1>
          <p className="text-lg">Comfortable stays in the heart of Shalimar, Srinagar</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Rooms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-4">
              <img src="/standard-room.jpg" alt="Standard Room" className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Standard Room</h3>
              <p className="mb-2">Cozy and budget-friendly rooms with all essentials.</p>
              <p className="font-bold">₹1800 / night</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <img src="/deluxe-room.jpg" alt="Deluxe Room" className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Deluxe Room</h3>
              <p className="mb-2">Spacious rooms with upgraded comfort and amenities.</p>
              <p className="font-bold">₹2500 / night</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Facilities</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center text-lg">
            <li>Free Wi-Fi</li>
            <li>Fan-cooled Rooms</li>
            <li>Attached Bathrooms</li>
            <li>Breakfast Included</li>
            <li>8 Rooms Total</li>
            <li>Quiet Location</li>
          </ul>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="mb-4 flex justify-center items-center gap-2"><Phone /> Bilal: <a href="tel:9622232870" className="text-blue-600">96222-32870</a></p>
          <p className="mb-4 flex justify-center items-center gap-2"><Phone /> Saroj: <a href="tel:9682311216" className="text-blue-600">96823-11216</a></p>
          <p className="flex justify-center items-center gap-2"><MapPin /> Zeal Lane, near Mirak Shah, Shalimar, Srinagar (KMR)</p>
        </div>
      </section>
    </main>
  );
}
