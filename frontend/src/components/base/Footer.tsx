import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="p-8 bg-gray-900 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">FalconChat</h2>
          <p className="text-gray-400">
            FalconChat is your go-to platform for real-time communication with top-notch encryption and seamless performance.
          </p>
          <div className="mt-4">
            <Link href="/about-us">
              <p className="text-gray-300 hover:text-white transition duration-300">
                About Us
              </p>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy-policy">
                <p className="text-gray-300 hover:text-white transition duration-300">
                  Privacy Policy
                </p>
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service">
                <p className="text-gray-300 hover:text-white transition duration-300">
                  Terms of Service
                </p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p className="text-gray-300 hover:text-white transition duration-300">
                  Contact Us
                </p>
              </Link>
            </li>
            <li>
              <Link href="/support">
                <p className="text-gray-300 hover:text-white transition duration-300">
                  Support
                </p>
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter for the latest updates and features.
          </p>
          <div className="flex space-x-2">
            <Input
              placeholder="Enter your email"
              className="bg-gray-800 border-none px-4 py-2 rounded-md"
            />
            <Button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <div>© 2024 FalconChat. All rights reserved.</div>
      </div>
    </footer>
  );
}