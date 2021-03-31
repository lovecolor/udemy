/* eslint-disable */
import logo from './logo.svg';
import './App.scss';


import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu:false,
      indexSlideShowinginCourses: 0,
      indexSlideShowinginViewing: 0,
      listCourses: [
        {
          src: "https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg?secure=9dO8tHi5PyQnytGEW2UhEw%3D%3D%2C1617188126",
          title: "2021 Complete Python Bootcamp From Zero to Hero in Python",
          author: "Jose Portilla",
          rate: 4.6,
          viewer: "(354,977)",
          sale: "$11.99",
          unsale: "$129.99",
          status: "Bestseller",
        },
        {
          src: "https://img-a.udemycdn.com/course/240x135/950390_270f_3.jpg?O7JN9C0GKFT71V2XDhJvPwsE2GNBazYSt356cZ1-KteAWAT0-c9zDU5zuDiisNoWcsbuwbHY4O4t9JMtyzh5uFxlzadI3q4AQG4dJhEgpkSxL6Mb5_KtfkXEmuqqSMs",
          title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
          author: "Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Support, Ligency Team",
          rate: 4.5,
          viewer: "(143,210)",
          sale: "$11.99",
          unsale: "$129.99",
          status: "Bestseller",
        },
        {
          src: "https://img-b.udemycdn.com/course/240x135/903744_8eb2.jpg?secure=YElPfbbPtaNdkylk-BD7ww%3D%3D%2C1617188194",
          title: "Python for Data Science and Machine Learning Bootcamp",
          author: "Jose Portilla",
          rate: 4.6,
          viewer: "(97,700)",
          sale: "$12.99",
          unsale: "$139.99",
          status: "",
        },
        {
          src: "https://img-a.udemycdn.com/course/240x135/629302_8a2d_2.jpg?ei2FhqT823ltGPCRdoHk_iHZdJ8_XSsWSpvDcnHdGOEqhigT-uw9vx-TEY_Sg2ipkmes-ihcsCnOEtne8wvte8X8cID9-7xVfQ1uJBb7LioBPRti2zC9x7d12-zKcm4",
          title: "Learn Python Programming Masterclass",
          author: "Tim Buchalka, Jean-Paul Roberts, Tim Buchalka's Learn Programming Academy",
          rate: 4.6,
          viewer: "(71,627)",
          sale: "$11.99",
          unsale: "$129.99",
          status: "",
        },
        {
          src: "https://img-a.udemycdn.com/course/240x135/692188_9da7_17.jpg?ImigjT8x-Yp9E16PeYc-dlY2OAwywyYJTVsINbSF9NlR52lLwi0d8k4lRPMkYclr2ViYixtTSH2eWvbhhcbvOqEiCAcLO8ozS2QSdL4vCc4M3swpbCvp9ewqMObBy_ea",
          title: "The Python Mega Course: Build 10 Real World Applications",
          author: "Ardit Sulce",
          rate: 4.6,
          viewer: "(47,409)",
          sale: "$11.99",
          unsale: "$129.99",
          status: "",
        },
        {
          src: "https://img-a.udemycdn.com/course/240x135/396876_cc92_7.jpg?1Kg3G--sXeIw9gQzNijGFxiolD3zTI7cYBdJqx5J07z144oRnjU6GlVFh7hkZhsLTIYpr__8xxJtNYgsPVJn4fgpKfZoH_XQ0fz3TVRB9ACTvzC_YXrzOHDF29Ny484",
          title: "Learning Python for Data Analysis and Visualization",
          author: "Jose Portilla",
          rate: 4.4,
          viewer: "(16,022)",
          sale: "$11.99",
          unsale: "$129.99",
          status: "Bestseller",
        },
        {
          src: "https://img-a.udemycdn.com/course/240x135/543600_64d1_4.jpg?mAna_qe0gs7bt_IFz7iHBDZ0ogAZTkHL2vLVns8UtbCem90ZUxQ3dyx46mp0UD6KdUuTwZC8jrOvXI6vLHTHOH8SXKJwr8Z1C5uezAPeCZuU9SNMiqusCpkkHu-Gdnc",
          title: "Automate the Boring Stuff with Python Programming",
          author: "Al Sweigart",
          rate: 4.6,
          viewer: "(83,842)",
          sale: "$13.99",
          unsale: "$49.99",
          status: "",
        },
        {
          src: "https://img-a.udemycdn.com/course/240x135/822444_a6db.jpg?hwWpUUTVQ-rJ715uYF3uu_q17hB0ZyDidQ8CBC4G8JQk5eUygbi-Ztyo2v53EpqPvL_XowzTBifhqMU3RKKE9l5hTk2py8tRdepAywXgTfeUb1QJac7L9tPXoC20",
          title: "Python and Django Full Stack Web Developer Bootcamp",
          author: "Jose Portilla",
          rate: 4.5,
          viewer: "(37,705)",
          sale: "$11.99",
          unsale: "$129.99",
          status: "Bestseller",
        },
        {
          src: "https://img-a.udemycdn.com/course/240x135/2776760_f176_5.jpg?cVQBm8WJ7tQCLXjmCK3ZGv4-hoZQktDFCW8tmHeNbkr9E-xUqAUZR1xkrasRqJt4W50e3dc7HorKbpZq_aqmc-AcViDlJ_egk4cX33XUbf52HP5gCnVMt-0LEmGwQs7e",
          title: "100 Days of Code - The Complete Python Pro Bootcamp for 2021",
          author: "Dr. Angela Yu",
          rate: 4.7,
          viewer: "(22,830)",
          sale: "$11.99",
          unsale: "$129.99",
          status: "",
        },
        {
          src: "https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg?secure=9dO8tHi5PyQnytGEW2UhEw%3D%3D%2C1617188126",
          title: "2021 Complete Python Bootcamp From Zero to Hero in Python",
          author: "Jose Portilla",
          rate: 4.6,
          viewer: "(354,977)",
          sale: "$11.99",
          unsale: "$129.99",
          status: "Bestseller",
        },
        {
          src: "https://img-a.udemycdn.com/course/240x135/950390_270f_3.jpg?O7JN9C0GKFT71V2XDhJvPwsE2GNBazYSt356cZ1-KteAWAT0-c9zDU5zuDiisNoWcsbuwbHY4O4t9JMtyzh5uFxlzadI3q4AQG4dJhEgpkSxL6Mb5_KtfkXEmuqqSMs",
          title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
          author: "Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Support, Ligency Team",
          rate: 4.5,
          viewer: "(143,210)",
          sale: "$11.99",
          unsale: "$129.99",
          status: "Bestseller",
        },
        {
          src: "https://img-b.udemycdn.com/course/240x135/903744_8eb2.jpg?secure=YElPfbbPtaNdkylk-BD7ww%3D%3D%2C1617188194",
          title: "Python for Data Science and Machine Learning Bootcamp",
          author: "Jose Portilla",
          rate: 4.6,
          viewer: "(97,700)",
          sale: "$12.99",
          unsale: "$139.99",
          status: "",
        },
        {
          src: "https://img-a.udemycdn.com/course/240x135/629302_8a2d_2.jpg?ei2FhqT823ltGPCRdoHk_iHZdJ8_XSsWSpvDcnHdGOEqhigT-uw9vx-TEY_Sg2ipkmes-ihcsCnOEtne8wvte8X8cID9-7xVfQ1uJBb7LioBPRti2zC9x7d12-zKcm4",
          title: "Learn Python Programming Masterclass",
          author: "Tim Buchalka, Jean-Paul Roberts, Tim Buchalka's Learn Programming Academy",
          rate: 4.6,
          viewer: "(71,627)",
          sale: "$11.99",
          unsale: "$129.99",
          status: "",
        },
        {
          src: "https://img-a.udemycdn.com/course/240x135/692188_9da7_17.jpg?ImigjT8x-Yp9E16PeYc-dlY2OAwywyYJTVsINbSF9NlR52lLwi0d8k4lRPMkYclr2ViYixtTSH2eWvbhhcbvOqEiCAcLO8ozS2QSdL4vCc4M3swpbCvp9ewqMObBy_ea",
          title: "The Python Mega Course: Build 10 Real World Applications",
          author: "Ardit Sulce",
          rate: 4.6,
          viewer: "(47,409)",
          sale: "$11.99",
          unsale: "$129.99",
          status: "",
        },
        {
          src: "https://img-a.udemycdn.com/course/240x135/396876_cc92_7.jpg?1Kg3G--sXeIw9gQzNijGFxiolD3zTI7cYBdJqx5J07z144oRnjU6GlVFh7hkZhsLTIYpr__8xxJtNYgsPVJn4fgpKfZoH_XQ0fz3TVRB9ACTvzC_YXrzOHDF29Ny484",
          title: "Learning Python for Data Analysis and Visualization",
          author: "Jose Portilla",
          rate: 4.4,
          viewer: "(16,022)",
          sale: "$11.99",
          unsale: "$129.99",
          status: "Bestseller",
        },
        {
          src: "https://img-a.udemycdn.com/course/240x135/543600_64d1_4.jpg?mAna_qe0gs7bt_IFz7iHBDZ0ogAZTkHL2vLVns8UtbCem90ZUxQ3dyx46mp0UD6KdUuTwZC8jrOvXI6vLHTHOH8SXKJwr8Z1C5uezAPeCZuU9SNMiqusCpkkHu-Gdnc",
          title: "Automate the Boring Stuff with Python Programming",
          author: "Al Sweigart",
          rate: 4.6,
          viewer: "(83,842)",
          sale: "$13.99",
          unsale: "$49.99",
          status: "",
        },
        {
          src: "https://img-a.udemycdn.com/course/240x135/822444_a6db.jpg?hwWpUUTVQ-rJ715uYF3uu_q17hB0ZyDidQ8CBC4G8JQk5eUygbi-Ztyo2v53EpqPvL_XowzTBifhqMU3RKKE9l5hTk2py8tRdepAywXgTfeUb1QJac7L9tPXoC20",
          title: "Python and Django Full Stack Web Developer Bootcamp",
          author: "Jose Portilla",
          rate: 4.5,
          viewer: "(37,705)",
          sale: "$11.99",
          unsale: "$129.99",
          status: "Bestseller",
        },
        {
          src: "https://img-a.udemycdn.com/course/240x135/2776760_f176_5.jpg?cVQBm8WJ7tQCLXjmCK3ZGv4-hoZQktDFCW8tmHeNbkr9E-xUqAUZR1xkrasRqJt4W50e3dc7HorKbpZq_aqmc-AcViDlJ_egk4cX33XUbf52HP5gCnVMt-0LEmGwQs7e",
          title: "100 Days of Code - The Complete Python Pro Bootcamp for 2021",
          author: "Dr. Angela Yu",
          rate: 4.7,
          viewer: "(22,830)",
          sale: "$11.99",
          unsale: "$129.99",
          status: "",
        },
        {
          src: "https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg?secure=9dO8tHi5PyQnytGEW2UhEw%3D%3D%2C1617188126",
          title: "2021 Complete Python Bootcamp From Zero to Hero in Python",
          author: "Jose Portilla",
          rate: 4.6,
          viewer: "(354,977)",
          sale: "$11.99",
          unsale: "$129.99",
          status: "Bestseller",
        },
        {
          src: "https://img-a.udemycdn.com/course/240x135/950390_270f_3.jpg?O7JN9C0GKFT71V2XDhJvPwsE2GNBazYSt356cZ1-KteAWAT0-c9zDU5zuDiisNoWcsbuwbHY4O4t9JMtyzh5uFxlzadI3q4AQG4dJhEgpkSxL6Mb5_KtfkXEmuqqSMs",
          title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
          author: "Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Support, Ligency Team",
          rate: 4.5,
          viewer: "(143,210)",
          sale: "$11.99",
          unsale: "$129.99",
          status: "Bestseller",
        },
        {
          src: "https://img-b.udemycdn.com/course/240x135/903744_8eb2.jpg?secure=YElPfbbPtaNdkylk-BD7ww%3D%3D%2C1617188194",
          title: "Python for Data Science and Machine Learning Bootcamp",
          author: "Jose Portilla",
          rate: 4.6,
          viewer: "(97,700)",
          sale: "$12.99",
          unsale: "$139.99",
          status: "",
        },
        {
          src: "https://img-a.udemycdn.com/course/240x135/629302_8a2d_2.jpg?ei2FhqT823ltGPCRdoHk_iHZdJ8_XSsWSpvDcnHdGOEqhigT-uw9vx-TEY_Sg2ipkmes-ihcsCnOEtne8wvte8X8cID9-7xVfQ1uJBb7LioBPRti2zC9x7d12-zKcm4",
          title: "Learn Python Programming Masterclass",
          author: "Tim Buchalka, Jean-Paul Roberts, Tim Buchalka's Learn Programming Academy",
          rate: 4.6,
          viewer: "(71,627)",
          sale: "$11.99",
          unsale: "$129.99",
          status: "",
        },
        {
          src: "https://img-a.udemycdn.com/course/240x135/692188_9da7_17.jpg?ImigjT8x-Yp9E16PeYc-dlY2OAwywyYJTVsINbSF9NlR52lLwi0d8k4lRPMkYclr2ViYixtTSH2eWvbhhcbvOqEiCAcLO8ozS2QSdL4vCc4M3swpbCvp9ewqMObBy_ea",
          title: "The Python Mega Course: Build 10 Real World Applications",
          author: "Ardit Sulce",
          rate: 4.6,
          viewer: "(47,409)",
          sale: "$11.99",
          unsale: "$129.99",
          status: "",
        },
        {
          src: "https://img-a.udemycdn.com/course/240x135/396876_cc92_7.jpg?1Kg3G--sXeIw9gQzNijGFxiolD3zTI7cYBdJqx5J07z144oRnjU6GlVFh7hkZhsLTIYpr__8xxJtNYgsPVJn4fgpKfZoH_XQ0fz3TVRB9ACTvzC_YXrzOHDF29Ny484",
          title: "Learning Python for Data Analysis and Visualization",
          author: "Jose Portilla",
          rate: 4.4,
          viewer: "(16,022)",
          sale: "$11.99",
          unsale: "$129.99",
          status: "Bestseller",
        },
        {
          src: "https://img-a.udemycdn.com/course/240x135/543600_64d1_4.jpg?mAna_qe0gs7bt_IFz7iHBDZ0ogAZTkHL2vLVns8UtbCem90ZUxQ3dyx46mp0UD6KdUuTwZC8jrOvXI6vLHTHOH8SXKJwr8Z1C5uezAPeCZuU9SNMiqusCpkkHu-Gdnc",
          title: "Automate the Boring Stuff with Python Programming",
          author: "Al Sweigart",
          rate: 4.6,
          viewer: "(83,842)",
          sale: "$13.99",
          unsale: "$49.99",
          status: "",
        },
        {
          src: "https://img-a.udemycdn.com/course/240x135/822444_a6db.jpg?hwWpUUTVQ-rJ715uYF3uu_q17hB0ZyDidQ8CBC4G8JQk5eUygbi-Ztyo2v53EpqPvL_XowzTBifhqMU3RKKE9l5hTk2py8tRdepAywXgTfeUb1QJac7L9tPXoC20",
          title: "Python and Django Full Stack Web Developer Bootcamp",
          author: "Jose Portilla",
          rate: 4.5,
          viewer: "(37,705)",
          sale: "$11.99",
          unsale: "$129.99",
          status: "Bestseller",
        },
        {
          src: "https://img-a.udemycdn.com/course/240x135/2776760_f176_5.jpg?cVQBm8WJ7tQCLXjmCK3ZGv4-hoZQktDFCW8tmHeNbkr9E-xUqAUZR1xkrasRqJt4W50e3dc7HorKbpZq_aqmc-AcViDlJ_egk4cX33XUbf52HP5gCnVMt-0LEmGwQs7e",
          title: "100 Days of Code - The Complete Python Pro Bootcamp for 2021",
          author: "Dr. Angela Yu",
          rate: 4.7,
          viewer: "(22,830)",
          sale: "$11.99",
          unsale: "$129.99",
          status: "",
        },


      ],
      listTopCategories: [
        {
          src: "https://s.udemycdn.com/home/top-categories/lohp-category-design.jpg",
          content: "Design"
        },
        {
          src: "https://s.udemycdn.com/home/top-categories/lohp-category-development.jpg",
          content: "Development"
        },
        {
          src: "https://s.udemycdn.com/home/top-categories/lohp-category-marketing.jpg",
          content: "Marketing"
        },
        {
          src: "https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software.jpg",
          content: "IT and Software"
        },
        {
          src: "https://s.udemycdn.com/home/top-categories/lohp-category-personal-development.jpg",
          content: "Personal Development"
        },
        {
          src: "https://s.udemycdn.com/home/top-categories/lohp-category-business.jpg",
          content: "Business"
        },
        {
          src: "https://s.udemycdn.com/home/top-categories/lohp-category-photography.jpg",
          content: "Photography"
        },
        {
          src: "https://s.udemycdn.com/home/top-categories/lohp-category-music.jpg",
          content: "Music"
        },
      ],
      listFeaturedTopicByCategory: [
        {
          title: "Python",
          amount: "25,703,311"
        },
        {
          title: "Financial Analysis",
          amount: "981,195"
        },
        {
          title: "AWS Certification",
          amount: "3,968,401"
        },
        {
          title: "Photoshop",
          amount: "8,839,889"
        },
        {
          title: "Web Development",
          amount: "8,688,330"
        },
        {
          title: "SQL",
          amount: "3,955,382"
        },
        {
          title: "Ethical Hacking",
          amount: "8,105,706"
        },
        {
          title: "Graphic Design",
          amount: "2,567,762"
        },
        {
          title: "Machine Learning",
          amount: "5,075,042"
        },
        {
          title: "PMP",
          amount: "1,297,531"
        },
        {
          title: "Cyber Security",
          amount: "2,837,574"
        },
        {
          title: "Drawing",
          amount: "1,993,043"
        },

      ],
      listFooter: [
        "Udemy for Business",
        "Careers",
        "Terms",

        "Teach on Udemy",
        "Blog",
        "Privacy policy",


        "Get the app",
        "Help and Support",
        "Sitemap",
        "About us",
        "Affiliate",
        "Featured courses",
        "Contact us",

      ],
      listLanguage: [
        "English",
        "Deutsch",
        "Español",
        "Français",
        "Bahasa Indonesia",
        "Italiano",
        "日本語",
        "한국어",
        "Nederlands",
        "Polski",
        "Português",
        "Română",
        "Русский",
        "ภาษาไทย",
        "Türkçe",
        "中文(简体)",
        "中文(繁體)"
      ]

    }
  }
  handelNextOfCourses = () => {
    let i = this.state.indexSlideShowinginCourses + 1
    if (i < (this.state.listCourses.length + 1) / 5)
      this.setState({
        indexSlideShowinginCourses: i
      })

  }
  handelBackOfCourses = () => {
    let i = this.state.indexSlideShowinginCourses - 1
    if (i >= 0)
      this.setState({
        indexSlideShowinginCourses: i
      })
  }
  handelNextOfViewing = () => {
    let i = this.state.indexSlideShowinginViewing + 1
    if (i < (this.state.listCourses.length + 1) / 5)
      this.setState({
        indexSlideShowinginViewing: i
      })

  }
  handelBackOfViewing = () => {
    let i = this.state.indexSlideShowinginViewing - 1
    if (i >= 0)
      this.setState({
        indexSlideShowinginViewing: i
      })
  }
  handleToggler=()=>{
    this.setState({
      showMenu:true
    })
  }
  handelTurnOffMenu=()=>{
    this.setState({
      showMenu:false
    })
  }
  render() {
    return (
      <div className="App">
        <div class={this.state.showMenu?'container listmenu':'listmenu-none'}>
          <ul class="list-group">
            <li class="list-group-item blue">Log in</li>
            <li class="list-group-item blue">Sign up</li>
            <hr></hr>
            <li class="list-group-item"><h6>Most popular</h6></li>
            <li class="list-group-item">
              Web Development
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </li>
            <li class="list-group-item">Mobile Development
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </li>
            <li class="list-group-item">Game Development
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </li>
            <li class="list-group-item">Entrepreneurship
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </li>
            <li class="list-group-item">Business Analytics & Intelligence
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </li>
            <li class="list-group-item">Digital Marketing
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </li>
            <li class="list-group-item">Graphic Design & Illustration
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </li>
            <li class="list-group-item">IT Certification
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </li>
            <li class="list-group-item">Personal Transformation
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </li>
            <li class="list-group-item">All categories
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </li>
            <hr></hr>
            <li class="list-group-item"><h6>More from Udemy</h6></li>
            <li class="list-group-item">Udemy for Business</li>
            <li class="list-group-item">Get the app</li>
            <li class="list-group-item">Invite friends</li>
            <li class="list-group-item">Help</li>
          </ul>
          <form onClick={this.handelTurnOffMenu}></form>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <button onClick={this.handleToggler} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#"><img src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg" class="img-fluid" alt="logo-coral"></img></a>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Categories</a>
                </li>

              </ul>
              <form class="d-flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <input class="form-control me-2" type="search" placeholder="Search for anything" aria-label="Search"></input>

              </form>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Udemy for Business</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Teach on Udemy</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    <button type="button" class="btn btn-outline-primary">Log in</button>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    <button type="button" class="btn btn-primary">Sign up</button>
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </nav>
        <div className='img-body'>
          <img src="https://img-a.udemycdn.com/notices/home_banner/image_udlite/f8324ecd-1a8d-4260-8e15-ec8aaeffa1d1.jpg?Cm5svRO2rOJnvwQawi7nHYx33lXl3D5EfTBObVl95qgm3d5lVcLIxhHeMPrkQXB8JOB9TAcdsh2GePPvk5xtNFVOqAa8G2HmFj4pRfO89luDoRj4T9I_IS7_m51jMRVIHhlCb216ACXR9825hULgrdNNzIZ85SngzWv3eNFcc5wTpvrDJjse0A" class="img-fluid img" alt="image-body"></img>
          <div className='content-img'>
            <h1 >Learn on your schedule</h1>
            <p>Study any topic, anytime. Explore thousands of courses starting at $12.99 each.</p>
            <form className='form-search'>
              <input className='input-search' placeholder='What do you want to learn?' type='text'></input>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </form>
          </div>
          <div className='footer' >
            <div className='item'>
              <div className='left'>
                <div className='icon-background'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon bi bi-collection-play" viewBox="0 0 16 16">
                    <path d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1zm2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848l-4-2.5z" />
                    <path d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5h13z" />
                  </svg>
                </div>

              </div>
              <div className='right'>
                <h6>130,000 online courses</h6>
                <p>Enjoy a variety of fresh topics</p>
              </div>
            </div>
            <div className='item'>
              <div className='left'>
                <div className='icon-background'>
                  <i class="fas fa-medal icon"></i>
                </div>

              </div>
              <div className='right'>
                <h6>Expert instruction</h6>
                <p>Find the right instructor for you</p>
              </div>
            </div>
            <div className='item'>
              <div className='left'>
                <div className='icon-background'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon bi bi-input-cursor" viewBox="0 0 16 16">
                    <path d="M10 5h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4v1h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4v1zM6 5V4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v-1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4z" />
                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13A.5.5 0 0 1 8 1z" />
                  </svg>
                </div>

              </div>
              <div className='right'>
                <h6>Lifetime access</h6>
                <p>Learn on your schedule</p>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className='container-courses'>
          <h4>The world's largest selection of courses</h4>
          <p>Choose from 130,000 online video courses with new additions published every month</p>
          <div className='container-menu'>
            <h5>Python</h5>
            <h5>Exel</h5>
            <h5>Web Development</h5>
            <h5>JavaScript</h5>
            <h5>Data Sience</h5>
            <h5>AWS Certification</h5>
            <h5>Drawing</h5>
          </div>
          <hr></hr>
          <div className='content-menu'>
            <div className='content-menu-left'>
              <h6 className='content-menu-left-title'>Expand your career opportunities with Python</h6>
              <p>Whether you work in machine learning or finance, or are pursuing a career in web development or data science, Python is one of the most important skills you can learn. Python's simple syntax is especially suited for desktop, web, and business applications. Python's design philosophy emphasizes readability and usability. Python was developed upon the premise that there should be only one way (and preferably one obvious way) to do things, a philosophy that has resulted in a strict level of code standardization. The core programming language is quite small and the standard library is also large. In fact, Python's large library is one of its greatest benefits, providing a variety of different tools for programmers suited for many different tasks.</p>
              <h6 className='content-menu-left-footer' >Explore Python ></h6>
            </div>
            <img className='content-menu-right' alt='avt' src='https://s.udemycdn.com/topic-images/lohp-topic-banners/GettyImages-1166389425_opt.jpg'></img>
          </div>
          <div className='list-card'>
            <button onClick={this.handelBackOfCourses} type="button" class={this.state.indexSlideShowinginCourses > 0 ? "btn-left btn btn-outline-primary" : "btn-left-none"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
              </svg>
            </button>
            <button onClick={this.handelNextOfCourses} type="button" class={this.state.indexSlideShowinginCourses < (this.state.listCourses.length + 1) / 5 - 1 ? "btn-right btn btn-outline-primary" : "btn-right-none"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
            {this.state.listCourses.map((item, index) => {
              let i = this.state.indexSlideShowinginCourses
              if (index >= i * 5 - i && index <= (i + 1) * 5 - i - 1)
                return (
                  <div class="card" >
                    <img src={item.src} class="card-img-top" alt="..."></img>
                    <div class="card-body">
                      <h5 class="card-title">{item.title}</h5>
                      <p class="card-text">{item.author}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">
                        <div className='number-rate'>{item.rate}</div>
                        <div className='rate'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
                            <path d="M5.354 5.119L7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.519.519 0 0 1-.146.05c-.341.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.171-.403.59.59 0 0 1 .084-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027c.08 0 .16.018.232.056l3.686 1.894-.694-3.957a.564.564 0 0 1 .163-.505l2.906-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.002 2.223 8 2.226v9.8z" />
                          </svg>

                        </div>
                        <div>{item.viewer}</div>
                      </li>
                      <li class="list-group-item">
                        <div className='sale'>{item.sale}</div>
                        <div className='unsale'>{item.unsale}</div>
                      </li>

                    </ul>
                    <div class="card-body">
                      <div className='status'>
                        {item.status}
                      </div>
                    </div>
                  </div>
                )
            })}

          </div>


        </div>
        <hr></hr>
        <div className='footer' >
          <div className='item'>
            <div className='left'>
              <div className='icon-background'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon bi bi-clock" viewBox="0 0 16 16">
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                </svg>
              </div>

            </div>
            <div className='right'>
              <h6>Go at your own pace</h6>
              <p>Enjoy lifetime access to courses on Udemy’s website and app</p>
            </div>
          </div>
          <div className='item'>
            <div className='left'>
              <div className='icon-background'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon bi bi-person-plus-fill" viewBox="0 0 16 16">
                  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                </svg>
              </div>

            </div>
            <div className='right'>
              <h6>Learn from industry experts</h6>
              <p>Select from top instructors around the world</p>
            </div>
          </div>
          <div className='item'>
            <div className='left'>
              <div className='icon-background'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon bi bi-collection-play-fill" viewBox="0 0 16 16">
                  <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm6.258-6.437a.5.5 0 0 1 .507.013l4 2.5a.5.5 0 0 1 0 .848l-4 2.5A.5.5 0 0 1 6 12V7a.5.5 0 0 1 .258-.437z" />
                </svg>
              </div>

            </div>
            <div className='right'>
              <h6>Find video courses on almost any topic</h6>
              <p>Build your library for your career and personal growth</p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className='container-courses viewing'>
          <h4>Students are viewing</h4>
          <div className='list-card'>
            <button onClick={this.handelBackOfViewing} type="button" class={this.state.indexSlideShowinginViewing > 0 ? "btn-left btn btn-outline-primary" : "btn-left-none"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
              </svg>
            </button>
            <button onClick={this.handelNextOfViewing} type="button" class={this.state.indexSlideShowinginViewing < (this.state.listCourses.length + 1) / 5 - 1 ? "btn-right btn btn-outline-primary" : "btn-right-none"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
            {this.state.listCourses.map((item, index) => {
              let i = this.state.indexSlideShowinginViewing
              if (index >= i * 5 - i && index <= (i + 1) * 5 - i - 1)
                return (
                  <div class="card" >
                    <img src={item.src} class="card-img-top" alt="..."></img>
                    <div class="card-body">
                      <h5 class="card-title">{item.title}</h5>
                      <p class="card-text">{item.author}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">
                        <div className='number-rate'>{item.rate}</div>
                        <div className='rate'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
                            <path d="M5.354 5.119L7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.519.519 0 0 1-.146.05c-.341.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.171-.403.59.59 0 0 1 .084-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027c.08 0 .16.018.232.056l3.686 1.894-.694-3.957a.564.564 0 0 1 .163-.505l2.906-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.002 2.223 8 2.226v9.8z" />
                          </svg>

                        </div>
                        <div>{item.viewer}</div>
                      </li>
                      <li class="list-group-item">
                        <div className='sale'>{item.sale}</div>
                        <div className='unsale'>{item.unsale}</div>
                      </li>

                    </ul>
                    <div class="card-body">
                      <div className='status'>
                        {item.status}
                      </div>
                    </div>
                  </div>
                )
            })}

          </div>
        </div>
        <div className='get-personal'>
          <h1>Get personal learning recommendations</h1>
          <p>Answer a few questions for your top picks</p>
          <button type="button" class="btn btn-outline-primary">Get started</button>
        </div>
        <div class="container">
          <h4>Top categories</h4>
          <div class="row row-cols-1 row-cols-md-4 g-4">

            {this.state.listTopCategories.map(item => (
              <div class="col">
                <div class="card h-100">
                  <img src={item.src} class="card-img-top" alt={item.content}></img>
                  <div class="card-body">
                    <h5 class="card-title">{item.content}</h5>

                  </div>
                </div>
              </div>
            ))}


          </div>
        </div>
        <div class="container">
          <h4>Featured topics by category</h4>
          <div class="table row row-cols-4">
            <div class="col bold">Development</div>
            <div class="col bold">Business</div>
            <div class="col bold">IT and Software</div>
            <div class="col bold">Design</div>
            {this.state.listFeaturedTopicByCategory.map(item => (
              <div class="col ">
                <h6 class="card-title">{item.title}</h6>
                <p>{item.amount + " "}students</p>
              </div>
            ))}
            <div class="col">
              <button class="btn btn-primary" type="submit">Explore more</button>
            </div>
          </div>
        </div>
        <div class='container Become-an-instructor'>
          <img src="https://s.udemycdn.com/home/non-student-cta/udlite-lohp-promo-teacher.jpg" class="img-fluid" alt="udlite-lohp-promo-teacher"></img>
          <div class="card" >

            <div class="card-body">
              <h5 class="card-title">Become an instructor</h5>
              <p class="card-text">Top instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</p>
              <a href="#" class="btn btn-primary">Star teaching today</a>
            </div>
          </div>
        </div>
        <hr></hr>
        <div class='container Trusted-by-companies-of-all-sizes'>
          <h4>Trusted by companies of all sizes</h4>
          <div class='container logo'>
            <img src="https://s.udemycdn.com/partner-logos/booking-logo.svg" class="img-fluid" alt="booking-logo"></img>
            <img src="https://s.udemycdn.com/partner-logos/volkswagen-logo.svg" class="img-fluid" alt="volkswagen-logo"></img>
            <img src="https://s.udemycdn.com/partner-logos/mercedes-logo-v2.svg" class="img-fluid" alt="mercedes-logo-v2"></img>
            <img src="https://s.udemycdn.com/partner-logos/adidas-logo.svg" class="img-fluid" alt="adidas-logo"></img>
            <img src="https://s.udemycdn.com/partner-logos/eventbrite-logo.svg" class="img-fluid" alt="eventbrite-logo"></img>
          </div>
        </div>
        <hr></hr>
        <div class='container Udemy-for-Business'>
          <div class="card" >

            <div class="card-body">
              <h5 class="card-title">Udemy for Business</h5>
              <p class="card-text">Get unlimited access to 5,500+ of Udemy’s top courses for your team.</p>
              <a href="#" class="btn btn-primary">Get Udemy for Business</a>
            </div>
          </div>
          <img src="https://s.udemycdn.com/home/non-student-cta/udlite-lohp-promo-ufb.jpg" class="img-fluid" alt="udlite-lohp-promo-ufb"></img>

        </div>
        <hr></hr>
        <div class='container Transform'>

          <iframe width="1600" height="315" src="https://www.youtube.com/embed/QFIhEmOd6No" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="card" >


            <div class="card-body">
              <h5 class="card-title">Transform your life through education</h5>
              <p class="card-text">Mohamad Alaloush launched a new career in software development by taking courses on Udemy. What will you be able to do?</p>

            </div>
          </div>


        </div>
        <hr></hr>
        <div class='container container-footer'>
          <div class="row row-cols-3">

            {this.state.listFooter.map(item => (
              <div class="col">
                {item}</div>
            ))}
          </div>
          <form >

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
            </svg>
            <select name="language" id="language">


              {this.state.listLanguage.map(item => (
                <option value={item}>{item}</option>
              ))}

            </select>

          </form>
          <img src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg" class="img-fluid" alt="logo-coral"></img>
          <div class='copyright-container'>
            © 2021 Udemy, Inc.</div>
        </div>

      </div>
    )
  }
}

