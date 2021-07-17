import ImagePicker from "./components/ImagePicker";
import SwitchCustomize from "./components/SwitchCustomize";

const {
  AccountCircle,
  HomeRounded,
  PhoneAndroidRounded,
  Facebook,
  Instagram,
  Twitter,
} = require("@material-ui/icons");
const { default: InputCustomize } = require("./components/InputCustomize");

export const structure = [
  {
    section: "Infomation",
    fields: [
      {
        grid: 6,
        component: () => (
          <InputCustomize
            title="First Name"
            icon={() => <AccountCircle color="primary" />}
          />
        ),
      },
      {
        grid: 6,
        component: () => (
          <InputCustomize
            title="Last Name"
            icon={() => <AccountCircle color="primary" />}
          />
        ),
      },
      {
        grid: 5,
        component: () => (
          <InputCustomize
            title="Age"
            icon={() => <AccountCircle color="primary" />}
          />
        ),
      },
      {
        grid: 5,
        component: () => (
          <InputCustomize
            title="Job"
            icon={() => <AccountCircle color="primary" />}
          />
        ),
      },
      {
        grid: 2,
        type: "switch",
        component: ({ checked, handleChange }) => (
          <SwitchCustomize checked={checked} handleChange={handleChange} />
        ),
      },
      {
        grid: 12,
        type: "image",
        component: ({ title }) => (
          <ImagePicker title={title} />
        ),
      },
    ],
  },
  {
    section: "Contact",
    fields: [
      {
        grid: 4,
        component: () => (
          <InputCustomize
            title="Address"
            icon={() => <HomeRounded color="primary" />}
          />
        ),
      },
      {
        grid: 4,

        component: () => (
          <InputCustomize
            title="Email"
            icon={() => <AccountCircle color="primary" />}
          />
        ),
      },
      {
        grid: 4,

        component: () => (
          <InputCustomize
            title="Phone"
            icon={() => <PhoneAndroidRounded color="primary" />}
          />
        ),
      },
    ],
  },
  {
    section: "Social Media",
    fields: [
      {
        grid: 4,

        component: () => (
          <InputCustomize
            title="Facebook"
            icon={() => <Facebook color="primary" />}
          />
        ),
      },
      {
        grid: 4,

        component: () => (
          <InputCustomize
            title="Facebook"
            icon={() => <Instagram color="primary" />}
          />
        ),
      },
      {
        grid: 4,

        component: () => (
          <InputCustomize
            title="Facebook"
            icon={() => <Twitter color="primary" />}
          />
        ),
      },
    ],
  },
  //   {
  //     section: "Infomation",
  //   },
];
