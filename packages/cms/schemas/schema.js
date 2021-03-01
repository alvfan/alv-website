// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import blockContent from './blockContent';
import employee from './employee';
import employeeTag from './employeeTag';
import article from './article';
import articleTag from './articleTag';
import redirects from './redirects';
import landingPage from './landingPage';
import aboutPage from './aboutPage';
import employeePage from './employeePage';
import careerPage from './careerPage';
import contactPage from './contactPage';
import ourServicesPage from './ourServicesPage';
import videoseriesPage from './videoseriesPage';
import blogPage from './blogPage';
import categoryPage from './categoryPage';
import testimonial from './testimonial';
import servicePage from './servicePage';
import siteSettings from './siteSettings';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    landingPage,
    videoseriesPage,
    servicePage,
    categoryPage,
    article,
    employeePage,
    blogPage,
    contactPage,
    aboutPage,
    careerPage,
    ourServicesPage,
    articleTag,
    employee,
    employeeTag,
    testimonial,
    redirects,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
  ]),
});
