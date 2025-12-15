import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Logo from "../Navbar/Logo";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content mt-20">
      <div className="w-11/12 mx-auto py-14">

        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-lg font-bold text-secondary mb-4">
              Public Infrastructure Issue <br /> Reporting System
            </h2>
            <p className="text-sm text-neutral-content/80">
              A smart public infrastructure issue reporting system that
              connects citizens and municipal authorities for faster,
              transparent, and efficient service delivery.
            </p>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              About
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Our Mission</li>
              <li>Smart City Vision</li>
              <li>Transparency & Accountability</li>
              <li>Digital Governance</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Road & Pothole Reporting</li>
              <li>Streetlight Maintenance</li>
              <li>Waste & Garbage Management</li>
              <li>Water Leakage Issues</li>
              <li>Public Safety Reporting</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/report" className="hover:text-primary transition">
                  Report Issue
                </Link>
              </li>
              <li>
                <Link to="/issues" className="hover:text-primary transition">
                  Track Issues
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-primary transition">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt />
                <span>Municipal Corporation, City Center</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt />
                <span>+880 1234 567890</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope />
                <span>support@citycare.gov</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider divider-primary my-10"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-neutral-content/70">
            © {new Date().getFullYear()} Public Infrastructure Issue Reporting System. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a className="btn btn-circle btn-sm btn-outline text-white">
              <FaFacebookF />
            </a>
            <a className="btn btn-circle btn-sm btn-outline text-white">
              <FaTwitter />
            </a>
            <a className="btn btn-circle btn-sm btn-outline text-white">
              <FaLinkedinIn />
            </a>
            <a className="btn btn-circle btn-sm btn-outline text-white">
              <FaGithub />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
