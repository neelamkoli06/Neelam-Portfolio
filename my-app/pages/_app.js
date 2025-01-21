// pages/_app.js
import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "../components/Layout"; // Assuming you have a Layout component

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial={{ rotateX: 90, opacity: 0 }} // Start with a rotated page and hidden
          animate={{ rotateX: 0, opacity: 1 }} // Rotate page into normal position
          exit={{ rotateX: -90, opacity: 0 }} // Rotate page out
          transition={{ duration: 0.8, ease: "easeInOut" }} // Duration and easing for smooth transition
          style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
