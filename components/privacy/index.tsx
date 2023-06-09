import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import * as styles from "./style";

export const Privacy = () => {
  return (
    <Container sx={{ pb: 5 }}>
      <Typography variant="h3" component="h1" textAlign="center" sx={styles.headingsStyles}>
        PRIVACY POLICY
      </Typography>
      <Typography variant="body1">
        This privacy policy sets out how this website (hereafter &quot;the Store&quot;) uses and
        protects any information that you give the Store while using this website. The Store is
        committed to ensuring that your privacy is protected. Should we ask you to provide certain
        information by which you can be identified when using this website, then you can be assured
        that it will only be used in accordance with this privacy statement. The Store may change
        this policy from time to time by updating this page. You should check this page from time to
        time to ensure that you are happy with any changes.
      </Typography>
      <Typography variant="h4" component="h2" sx={styles.headingsStyles}>
        What we collect
      </Typography>
      <Typography variant="body1" component="div">
        We may collect the following information:
        <ul>
          <li>Name</li>
          <li>Contact information including email address</li>
          <li>Demographic information such as postcode, preferences and interests</li>
          <li>Other information relevant to customer surveys and/or offers</li>
        </ul>
        For the exhaustive list of cookies we collect see the List of cookies we collect
        &nbsp;section.
      </Typography>
      <Typography variant="h4" component="h2" sx={styles.headingsStyles}>
        What we do with the information we gather
      </Typography>
      <Typography variant="body1" component="div">
        We require this information to understand your needs and provide you with a better service,
        and in particular for the following reasons:
        <ul>
          <li>Internal record keeping.</li>
          <li>We may use the information to improve our products and services.</li>
          <li>
            We may periodically send promotional emails about new products, special offers or other
            information which we think you may find interesting using the email address which you
            have provided.
          </li>
          <li>
            From time to time, we may also use your information to contact you for market research
            purposes. We may contact you by email, phone, fax or mail. We may use the information to
            customize the website according to your interests.
          </li>
        </ul>
      </Typography>
      <Typography variant="h4" component="h2" sx={styles.headingsStyles}>
        Security
      </Typography>
      <Typography variant="body1">
        We are committed to ensuring that your information is secure. In order to prevent
        unauthorized access or disclosure, we have put in place suitable physical, electronic and
        managerial procedures to safeguard and secure the information we collect online.
      </Typography>
      <Typography variant="h4" component="h2" sx={styles.headingsStyles}>
        How we use cookies
      </Typography>
      <Typography variant="body1">
        A cookie is a small file which asks permission to be placed on your computer&apos;s hard
        drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets
        you know when you visit a particular site. Cookies allow web applications to respond to you
        as an individual. The web application can tailor its operations to your needs, likes and
        dislikes by gathering and remembering information about your preferences. We use traffic log
        cookies to identify which pages are being used. This helps us analyze data about web page
        traffic and improve our website in order to tailor it to customer needs. We only use this
        information for statistical analysis purposes and then the data is removed from the system.
        Overall, cookies help us provide you with a better website, by enabling us to monitor which
        pages you find useful and which you do not. A cookie in no way gives us access to your
        computer or any information about you, other than the data you choose to share with us. You
        can choose to accept or decline cookies. Most web browsers automatically accept cookies, but
        you can usually modify your browser setting to decline cookies if you prefer. This may
        prevent you from taking full advantage of the website.
      </Typography>
      <Typography variant="h4" component="h2" sx={styles.headingsStyles}>
        Links to other websites
      </Typography>
      <Typography variant="body1">
        Our website may contain links to other websites of interest. However, once you have used
        these links to leave our site, you should note that we do not have any control over that
        other website. Therefore, we cannot be responsible for the protection and privacy of any
        information which you provide whilst visiting such sites and such sites are not governed by
        this privacy statement. You should exercise caution and look at the privacy statement
        applicable to the website in question.
      </Typography>
      <Typography variant="h4" component="h2" sx={styles.headingsStyles}>
        Controlling your personal information
      </Typography>
      <Typography variant="body1" component="div">
        You may choose to restrict the collection or use of your personal information in the
        following ways:
        <ul>
          <li>
            whenever you are asked to fill in a form on the website, look for the box that you can
            click to indicate that you do not want the information to be used by anybody for direct
            marketing purposes
          </li>
          <li>
            if you have previously agreed to us using your personal information for direct marketing
            purposes, you may change your mind at any time by letting us know using our Contact Us
            information
          </li>
        </ul>
        We will not sell, distribute or lease your personal information to third parties unless we
        have your permission or are required by law to do so. We may use your personal information
        to send you promotional information about third parties which we think you may find
        interesting if you tell us that you wish this to happen. You may request details of personal
        information which we hold about you under the Data Protection Act 1998. A small fee will be
        payable. If you would like a copy of the information held on you please email us this
        request using our Contact Us information. If you believe that any information we are holding
        on you is incorrect or incomplete, please write to or email us as soon as possible, at the
        above address. We will promptly correct any information found to be incorrect.
      </Typography>
      <Typography variant="h4" component="h2" sx={styles.headingsStyles}>
        List of cookies we collect
      </Typography>
      <Typography variant="body1">
        The table below lists the cookies we collect and what information they store.
      </Typography>
      <TableContainer component={Paper} elevation={0}>
        <Table sx={{ minWidth: 500, mx: "auto", my: 3 }}>
          <TableHead>
            <TableRow sx={{ "td, th": { border: 0 } }}>
              <TableCell sx={styles.tableHead}>Cookie Name</TableCell>
              <TableCell sx={styles.tableHead}>Cookie Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cookieList.map((cookie) => (
              <TableRow key={cookie.name} sx={{ "td, th": { border: 0 } }}>
                <TableCell component="th" scope="row" sx={{ fontWeight: "bold" }}>
                  <div dangerouslySetInnerHTML={{ __html: cookie.name }} />
                </TableCell>
                <TableCell sx={styles.tableCellDesc}>{cookie.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

const cookieList = [
  {
    name: "FORM_<wbr>KEY", // <wbr> for word break to work with underscore
    description: "Stores randomly generated key used to prevent forged requests.",
  },
  {
    name: "PHPSESSID",
    description: "Your session ID on the server.",
  },
  {
    name: "GUEST-VIEW",
    description: "Allows guests to view and edit their orders.",
  },
  {
    name: "PERSISTENT_<wbr>SHOPPING_<wbr>CART",
    description:
      "A link to information about your cart and viewing history, if you have asked for this.",
  },
  {
    name: "STF",
    description: "Information on products you have emailed to friends.",
  },
  {
    name: "STORE",
    description: "The store view or language you have selected.",
  },
  {
    name: "USER_<wbr>ALLOWED_<wbr>SAVE_<wbr>COOKIE",
    description: "Indicates whether a customer allowed to use cookies.",
  },
  {
    name: "MAGE-CACHE-SESSID",
    description: "Facilitates caching of content on the browser to make pages load faster.",
  },
  {
    name: "MAGE-CACHE-STORAGE",
    description: "Facilitates caching of content on the browser to make pages load faster.",
  },
  {
    name: "MAGE-CACHE-STORAGE-SECTION-INVALIDATION",
    description: "Facilitates caching of content on the browser to make pages load faster.",
  },
  {
    name: "MAGE-CACHE-TIMEOUT",
    description: "Facilitates caching of content on the browser to make pages load faster.",
  },
  {
    name: "SECTION-DATA-IDS",
    description: "Facilitates caching of content on the browser to make pages load faster.",
  },
  {
    name: "PRIVATE_CONTENT_VERSION",
    description: "Facilitates caching of content on the browser to make pages load faster.",
  },
  {
    name: "X-MAGENTO-VARY",
    description: "Facilitates caching of content on the server to make pages load faster.",
  },
  {
    name: "MAGE-TRANSLATION-FILE-VERSION",
    description: "Facilitates translation of content to other languages.",
  },
  {
    name: "MAGE-TRANSLATION-STORAGE",
    description: "Facilitates translation of content to other languages.",
  },
];
