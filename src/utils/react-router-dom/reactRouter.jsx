import { createBrowserRouter, createHashRouter } from "react-router-dom";
import { lazy } from "react";
// admin pages
const BlogCreation = lazy(() => import("../../pages/admin/BlogCreation"));
const ContactResponse = lazy(() => import("../../pages/admin/ContactResponse"));
const FAQCreation = lazy(() => import("../../pages/admin/FAQCreation"));
const Login = lazy(() => import("../../pages/admin/Login"));
const NewsLetterResponse = lazy(() => import("../../pages/admin/NewsLetterResponse"));
const ServiceCreation = lazy(() => import("../../pages/admin/ServiceCreation"));
const PortfolioCreation = lazy(() => import("../../pages/admin/PortfolioCreation"));
const AdminLogin = lazy(() => import("../../components/Admin/AdminLogin"));
const AdminDashboard = lazy(() => import("../../components/Admin/AdminDashboard"));
// pages
import Home from "../../pages/Home";
import Blog from "../../pages/Blog";
const BlogbyId = lazy(() => import("../../pages/BlogbyId"));
import ContactUs from "../../pages/ContactUs";
import Aboutus from "../../pages/Aboutus";
import Portfolio from "../../pages/Portfolio";
import Services from "../../pages/Services";
import NotFound from "../../pages/NotFound";
// code splitting
const Team = lazy(() => import("../../pages/Team"));
const DetailsService = lazy(() => import("../../pages/DetailsService"));
const PortfolioDetails = lazy(() => import("../../pages/PortfolioDetails"));
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import BlogManagement from "../../pages/admin/BlogManagement";


export const routerpaths = createBrowserRouter([
    {
      path: "/",
      element: (<Home/>),
    },
    {
      path: "/home",
      element: (<Home/>),
    },
    {
      path: "contactus",
      element: (<ContactUs/>),
  },
  {
    path: "aboutus",
    element: (<Aboutus/>),
  },

  {
    path: "portfolio",
    element: (<Portfolio />),
  },
  {
    path: "portfolioDetails/:name",
    element: (<PortfolioDetails />),
  },
  {
    path: "blog",
    element: (<Blog/>),
  },
  {
    path: "services",
    element: (<Services/>),
  },
  {
    path: "services/:id",
    element: (<DetailsService/>),
  },
  {
    path: "marketingKit-team",
    element: (<Team/>),
  },
  {
    path: "blog/:id",
    element: (<BlogbyId/>),
  },
  {
    path: "login/admin",
    element: (<Login/>),
  },
    {
      path: "admin/blogcreation",
      element: (
        <ProtectedRoute>
          <BlogCreation />
        </ProtectedRoute>
      ),
    },
    {
      path: "admin/servicecreation",
      element: (
        <ProtectedRoute>
          <ServiceCreation />
        </ProtectedRoute>
      ),
    },
    {
      path: "admin/faqcreation",
      element: (
        <ProtectedRoute>
          <FAQCreation />
        </ProtectedRoute>
      ),
    },
    {
      path: "admin/contactresponse",
      element: (
        <ProtectedRoute>
          <ContactResponse />
        </ProtectedRoute>
      ),
    },
    {
    path: "admin/portfolioCreation",
    element: (
      <ProtectedRoute>
        <PortfolioCreation />
      </ProtectedRoute>
    ),
  },
  {
      path: "admin/newsletterresponse",
      element: (
        <ProtectedRoute>
          <NewsLetterResponse />
        </ProtectedRoute>
      ),
    },
  {
    path: "admin/blogManagement",
    element: (
      <ProtectedRoute>
        <BlogManagement />
      </ProtectedRoute>
    ),
  },
  {
    path: "admin/chatbot/login",
    element: <AdminLogin />,
  },
  {
    path: "admin/chatbot/dashboard",
    element: (
      <ProtectedRoute>
        <AdminDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: (
      <NotFound />
    ),
  },
    
  ]);
  