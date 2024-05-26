import { Routes, Route } from "react-router-dom";

// import layout admin
import AdminLayout from "@/components/layouts/AdminLayout";

// import dashboard
import {
  Cms,
  Crm,
  Analytics,
  Sales,
  Hosting,
  Saas,
  Marketing,
  Ecommerce,
  Projects,
} from "@/views/dashboard/index";

// import ecommerce
import {
  Checkout,
  Customers,
  Invoice,
  OrderDetail,
  Orders,
  ProductDetail,
  Products,
  Sellers,
  ShoppingCart,
} from "@/views/ecommerce";
// import project
import {
  CreateProject,
  Kanban,
  ProjectDetail,
  ProjectLists,
} from "@/views/project";
// import pages
import {
  NotFound,
  Faq,
  Pricing,
  Profile,
  Services,
  Starter,
} from "@/views/pages";
// Import App
import Widgets from "@/views/app/Widgets";

// import index documentation
import {
  Introduction,
  ChangelogDocs,
  CreditsDocs,
  CustomizeDocs,
} from "@/views/documentation/";

// import components docs
import {
  AccordionDocs,
  AlertsDocs,
  AvatarDocs,
  BreadcrumbDocs,
  ButtonsDocs,
  BadgeDocs,
  CardsDocs,
  CarouselDocs,
  ChartDocs,
  CollapseDocs,
  DevicesDocs,
  DropdownsDocs,
  GridDocs,
  ListGroupDocs,
  MapDocs,
  ModalDocs,
  NavbarDocs,
  NotificationDocs,
  OffCanvasDocs,
  PaginationDocs,
  PopoversDocs,
  ProgressDocs,
  RibbonDocs,
  ScrollbarDocs,
  SpinnerDocs,
  SubmenuDocs,
  SweetAlertDocs,
  RatingDocs,
  FormatDocs,
  TabsDocs,
  TooltipsDocs,
} from "@/views/documentation/components";
// import content docs

import {
  IconsDocs,
  TablesDocs,
  TypographyDocs,
} from "@/views/documentation/content";
// import forms docs

import {
  InputDocs,
  AdvanceDocs,
  InputLabelDocs,
  SelectDocs,
  CheckDocs,
  SwitchDocs,
  FormsDocs,
  InputGroupDocs,
} from "@/views/documentation/forms";

export default function Admin() {
  return (
    <AdminLayout>
      <Routes>
        {/* dashboard  */}
        <Route path="/*" element={<Cms />} />
        <Route path="/dashboard/cms/*" element={<Cms />} />
        <Route path="/dashboard/analytics/*" element={<Analytics />} />
        <Route path="/dashboard/saas/*" element={<Saas />} />
        <Route path="/dashboard/sales/*" element={<Sales />} />
        <Route path="/dashboard/crm/*" element={<Crm />} />
        <Route path="/dashboard/marketing/*" element={<Marketing />} />
        <Route path="/dashboard/projects/*" element={<Projects />} />
        <Route path="/dashboard/ecommerce/*" element={<Ecommerce />} />
        <Route path="/dashboard/hosting/*" element={<Hosting />} />

        {/* App */}
        <Route path="/app/widgets/*" element={<Widgets />} />

        {/* Ecommerce */}
        <Route path="/ecommerce/products/*" element={<Products />} />
        <Route path="/ecommerce/product-detail/*" element={<ProductDetail />} />
        <Route path="/ecommerce/orders/*" element={<Orders />} />
        <Route path="/ecommerce/order-detail/*" element={<OrderDetail />} />
        <Route path="/ecommerce/sellers/*" element={<Sellers />} />
        <Route path="/ecommerce/customers/*" element={<Customers />} />
        <Route path="/ecommerce/shopping-cart/*" element={<ShoppingCart />} />
        <Route path="/ecommerce/checkout/*" element={<Checkout />} />
        <Route path="/ecommerce/invoice/*" element={<Invoice />} />

        {/* Projects */}
        <Route path="/project/project-lists/*" element={<ProjectLists />} />
        <Route path="/project/project-detail/*" element={<ProjectDetail />} />
        <Route path="/project/kanban/*" element={<Kanban />} />
        <Route path="/project/create-project/*" element={<CreateProject />} />

        {/* Pages */}
        <Route path="/pages/profile/*" element={<Profile />} />
        <Route path="/pages/services/*" element={<Services />} />
        <Route path="/pages/faq/*" element={<Faq />} />
        <Route path="/pages/pricing/*" element={<Pricing />} />
        <Route path="/pages/404/*" element={<NotFound />} />
        <Route path="/pages/starter/*" element={<Starter />} />

        {/* index docs  */}
        <Route path="/start/introduction/*" element={<Introduction />} />
        <Route path="/start/customize/*" element={<CustomizeDocs />} />
        <Route path="/start/credits/*" element={<CreditsDocs />} />
        <Route path="/start/changelogs/*" element={<ChangelogDocs />} />

        {/* forms */}
        <Route path="/forms/advance/*" element={<AdvanceDocs />} />
        <Route path="/forms/input/*" element={<InputDocs />} />
        <Route path="/forms/inputlabel/*" element={<InputLabelDocs />} />
        <Route path="/forms/inputgroup/*" element={<InputGroupDocs />} />
        <Route path="/forms/select/*" element={<SelectDocs />} />
        <Route path="/forms/checkbox-radio/*" element={<CheckDocs />} />
        <Route path="/forms/switch-range/*" element={<SwitchDocs />} />
        <Route path="/forms/forms-example/*" element={<FormsDocs />} />

        {/* content */}
        <Route path="/content/typography/*" element={<TypographyDocs />} />
        <Route path="/content/tables/*" element={<TablesDocs />} />
        <Route path="/content/icons/*" element={<IconsDocs />} />

        {/* components */}
        <Route path="/components/accordion/*" element={<AccordionDocs />} />
        <Route path="/components/alerts/*" element={<AlertsDocs />} />
        <Route path="/components/avatar/*" element={<AvatarDocs />} />
        <Route path="/components/badge/*" element={<BadgeDocs />} />
        <Route path="/components/buttons/*" element={<ButtonsDocs />} />
        <Route path="/components/breadcrumb/*" element={<BreadcrumbDocs />} />
        <Route path="/components/cards/*" element={<CardsDocs />} />
        <Route path="/components/carousel/*" element={<CarouselDocs />} />
        <Route path="/components/chart/*" element={<ChartDocs />} />
        <Route path="/components/collapse/*" element={<CollapseDocs />} />
        <Route path="/components/devices/*" element={<DevicesDocs />} />
        <Route path="/components/dropdowns/*" element={<DropdownsDocs />} />
        <Route path="/components/grid/*" element={<GridDocs />} />
        <Route path="/components/list-group/*" element={<ListGroupDocs />} />
        <Route path="/components/map/*" element={<MapDocs />} />
        <Route path="/components/modal/*" element={<ModalDocs />} />
        <Route path="/components/navbar/*" element={<NavbarDocs />} />
        <Route
          path="/components/notification/*"
          element={<NotificationDocs />}
        />
        <Route path="/components/offcanvas/*" element={<OffCanvasDocs />} />
        <Route path="/components/pagination/*" element={<PaginationDocs />} />
        <Route path="/components/popovers/*" element={<PopoversDocs />} />
        <Route path="/components/progress/*" element={<ProgressDocs />} />
        <Route path="/components/ribbon/*" element={<RibbonDocs />} />
        <Route path="/components/scrollbar/*" element={<ScrollbarDocs />} />
        <Route path="/components/spinner/*" element={<SpinnerDocs />} />
        <Route path="/components/submenu/*" element={<SubmenuDocs />} />
        <Route path="/components/sweetalert/*" element={<SweetAlertDocs />} />
        <Route path="/components/tabs/*" element={<TabsDocs />} />
        <Route path="/components/tooltips/*" element={<TooltipsDocs />} />
        <Route path="/components/formatter/*" element={<FormatDocs />} />
        <Route path="/components/rating/*" element={<RatingDocs />} />
      </Routes>
    </AdminLayout>
  );
}
