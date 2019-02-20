import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Link from "@material-ui/icons/Link";
import Favorite from "@material-ui/icons/Favorite";
// core components
// import Header from "components/Header/Header.jsx";
// import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
// import CustomInput from "components/CustomInput/CustomInput.jsx";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import Icon from "@material-ui/core/Icon";

import profile from "assets/img/faces/test2.jpeg";

// import studio1 from "assets/img/examples/studio-1.jpg";
// import studio2 from "assets/img/examples/studio-2.jpg";
// import studio3 from "assets/img/examples/studio-3.jpg";
// import studio4 from "assets/img/examples/studio-4.jpg";
// import studio5 from "assets/img/examples/studio-5.jpg";

import resume from "assets/img/examples/resume.png";

import fav1 from "assets/img/examples/fav1.jpg";
import fav2 from "assets/img/examples/fav2.jpg";
// import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import fav3 from "assets/img/examples/fav3.jpg";
import fav4 from "assets/img/examples/fav4.jpg";
import fav5 from "assets/img/examples/fav5.jpg";
import fav6 from "assets/img/examples/fav6.jpeg";



// import work5 from "assets/img/examples/clem-onojegaw.jpg";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";


// ...rest

class ProfilePage extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        {/* <Header
          color="transparent"
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        /> */}
        <Parallax small filter image={require("assets/img/bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Amanda Murillo</h3>
                      <h6>WEB DEVELOPER</h6>
                      <Button justIcon link className={classes.margin5} href="https://github.com/amandamurillo" target="_blank">
                        <i className={"fab fa-github"} /> 
                      </Button>
                      <Button justIcon link className={classes.margin5} href="https://www.linkedin.com/in/amanda-murillo-58681a118/" target="_blank">
                        <i className={"fab fa-linkedin"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fas fa-envelope-square"} />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                   Looking to continue to challenge myself and get involved in challenging, yet rewarding work.  {" "}
                </p>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Work",
                        tabIcon: Palette,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem >
                              <Card className={classes.Card}>
                              <CardHeader color="primary" className={classes.cardHeader}>
                                <h4>uCare</h4>
                                <div className={classes.socialLine}>
                                  <Button
                                    justIcon
                                    href="https://github.com/amandamurillo/uCare"
                                    target="_blank"
                                    color="transparent"
                                    // onClick={e => e.preventDefault()}
                                    >
                                    <i className={"fab fa-github"} />
                                  </Button>
                                </div>
                              </CardHeader>
                                <p className={classes.divider}></p>
                                <CardBody>
                                  Ucare is a healthcare app that uses Skype API to connect patients to doctors.
                                </CardBody>
                            </Card>
                          </GridItem>

                           <GridItem >
                              <Card className={classes.Card}>
                              <CardHeader color="primary" className={classes.cardHeader}>
                                <h4>Soma</h4>
                                <div className={classes.socialLine}>
                                  <Button
                                    justIcon
                                    href="https://github.com/amandamurillo/Soma"
                                    target="_blank"
                                    color="transparent"
                                    // onClick={e => e.preventDefault()}
                                    >
                                    <i className={"fab fa-github"} />
                                  </Button>
                                </div>
                              </CardHeader>
                              <p className={classes.divider}></p>
                              <CardBody>
                    Soma is an CRUD application that lets users create a profile, and leave review's for any artist's live shows. Users are able to rate performance, energy, venue, and other factors. Concert and festival tickets are extremely expensive and SOMA makes sure that the artist you are seeing is worth it. 
                      
                     </CardBody>
                    </Card>
                  </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Resume",
                        tabIcon: Link,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem >
                              <img
                                alt="..."
                                src={resume}
                                className={navImageClasses}
                              />
                              
                            </GridItem>
                            {/* <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work5}
                                className={navImageClasses}
                              />
                            </GridItem> */}
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Interests",
                        tabIcon: Favorite,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={fav3}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={fav4}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={fav6}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={fav2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={fav1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={fav5}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
