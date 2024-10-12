(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405], {
        8312: function (e, t, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function () {
                return i(4186)
            }])
        },
        7471: function (e, t, i) {
            "use strict";
            var a = i(5893),
                s = i(719);
            i(1082), i(1669);
            var r = i(965),
                n = i(1664),
                o = i.n(n),
                l = i(9473);
            let c = e => {
                let {
                    title1: t = "",
                    title2: i = "",
                    blogs: n = [{
                        id: 1,
                        thumbnail: "/assets/images/blog1.png",
                        title: "UI/UX Design",
                        excerpt: "Simple & constructive methods to improve your visual/UI design",
                        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                    }, {
                        id: 2,
                        thumbnail: "/assets/images/blog2.png",
                        title: "Project Management",
                        excerpt: "Why is JIRA important for managing projects?",
                        description: "Jira works well for Agile development projects for many reasons, including the ability to create Kanban and Scrum boards with sprint planning and issue time estimation capabilities."
                    }, {
                        id: 3,
                        thumbnail: "/assets/images/blog3.png",
                        title: "SEO Marketing",
                        excerpt: "What is SEO (Search Engine Optimization)?",
                        description: "Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines."
                    }],
                    type: c = "service",
                    className: d = ""
                } = e, h = "rtl" === (0, l.v9)(e => e.themeConfig.direction);
                return (0, a.jsx)("section", {
                    className: "py-14 relative lg:py-[100px] ".concat(d),
                    children: (0, a.jsxs)("div", {
                        className: "container",
                        children: [(0, a.jsxs)("div", {
                            className: "flex flex-col items-center justify-center lg:flex-row lg:justify-between ".concat(t.length > 0 ? "" : "mb-10"),
                            children: [(0, a.jsxs)("div", {
                                className: "heading text-center ltr:lg:text-left rtl:lg:text-right ".concat(t.length > 0 ? "" : "mb-0"),
                                children: [t.length > 0 && (0, a.jsx)("h6", {
                                    className: "modern-saas" === c.toLowerCase() ? "!text-secondary" : "",
                                    children: t
                                }), i.length > 0 && (0, a.jsx)("h4", {
                                    children: i
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "mb-8 flex items-center justify-end gap-4 lg:mb-0",
                                children: [(0, a.jsx)("button", {
                                    type: "button",
                                    className: "blog-slider-button-prev flex h-10 w-10 items-center justify-center rounded-full bg-black/5 transition hover:bg-secondary dark:bg-white/5 dark:hover:bg-secondary",
                                    children: (0, a.jsx)("svg", {
                                        width: "7",
                                        height: "12",
                                        viewBox: "0 0 7 12",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "text-black rtl:rotate-180 dark:text-white",
                                        children: (0, a.jsx)("path", {
                                            d: "M5.95007 1.2002L1.48924 5.3424C1.06317 5.73803 1.06317 6.41236 1.48924 6.80799L5.95007 10.9502",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round"
                                        })
                                    })
                                }), (0, a.jsx)("button", {
                                    type: "button",
                                    className: "blog-slider-button-next text-p flex h-10 w-10 items-center justify-center rounded-full bg-black/5 transition hover:bg-secondary dark:bg-white/5 dark:hover:bg-secondary",
                                    children: (0, a.jsx)("svg", {
                                        width: "7",
                                        height: "12",
                                        viewBox: "0 0 7 12",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "text-black rtl:rotate-180 dark:text-white",
                                        children: (0, a.jsx)("path", {
                                            d: "M1.05005 10.7998L5.51089 6.6576C5.93695 6.26197 5.93695 5.58764 5.51089 5.19201L1.05005 1.0498",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round"
                                        })
                                    })
                                })]
                            })]
                        }), (0, a.jsxs)(s.tq, {
                            modules: [r.W_, r.pt],
                            slidesPerView: "auto",
                            spaceBetween: 30,
                            loop: !0,
                            autoplay: {
                                delay: 1e4,
                                disableOnInteraction: !1
                            },
                            navigation: {
                                nextEl: ".blog-slider-button-next",
                                prevEl: ".blog-slider-button-prev"
                            },
                            breakpoints: {
                                640: {
                                    slidesPerView: 2
                                },
                                1024: {
                                    slidesPerView: 3
                                }
                            },
                            dir: h ? "rtl" : "ltr",
                            children: ["service" === c.toLowerCase() && n.map((e, t) => (0, a.jsx)(s.o5, {
                                children: (0, a.jsxs)("div", {
                                    className: "relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark",
                                    children: [(0, a.jsx)(o(), {
                                        href: "/blog-details",
                                        className: "absolute top-0 h-full w-full ltr:left-0 rtl:right-0"
                                    }), (0, a.jsx)("img", {
                                        src: e.thumbnail,
                                        alt: "blog1",
                                        className: "h-52 w-full rounded-t-3xl object-cover"
                                    }), (0, a.jsxs)("div", {
                                        className: "p-5 text-sm font-bold",
                                        children: [(0, a.jsx)("h6", {
                                            className: "font-extrabold text-secondary dark:text-secondary",
                                            children: e.title
                                        }), (0, a.jsx)("h5", {
                                            className: "my-[10px] block text-lg font-extrabold leading-[23px] text-black line-clamp-2 dark:text-white",
                                            children: e.excerpt
                                        }), (0, a.jsx)("p", {
                                            className: "line-clamp-4",
                                            children: e.description
                                        })]
                                    })]
                                })
                            }, e.id)), "modern-saas" === c.toLowerCase() && n.map((e, t) => (0, a.jsx)(s.o5, {
                                children: (0, a.jsx)(o(), {
                                    href: e.href,
                                    target: "_blank",
                                    children: (0, a.jsxs)("div", {
                                        className: "rounded-3xl group cursor-pointer bg-white dark:bg-black/50",
                                        children: [(0, a.jsx)("img", {
                                            src: e.thumbnail,
                                            alt: "blog-3",
                                            className: "h-52 w-full rounded-t-3xl object-cover"
                                        }), (0, a.jsxs)("div", {
                                            className: "p-5 text-sm font-bold",
                                            children: [(0, a.jsx)("div", {
                                                className: "my-[10px] block text-lg font-extrabold leading-[23px] text-black transition line-clamp-2 dark:text-white ",
                                                children: e.title
                                            }), (0, a.jsx)("p", {
                                                className: "line-clamp-3",
                                                children: e.excerpt
                                            }), (0, a.jsxs)("div", {
                                                className: "mt-6 flex items-center justify-between text-secondary",
                                                children: [(0, a.jsx)("span", {
                                                    children: e.date
                                                }), (0, a.jsx)("div", {
                                                    className: "duration-300 group-hover:translate-x-2 rtl:rotate-180 rtl:group-hover:-translate-x-2",
                                                    children: (0, a.jsx)("svg", {
                                                        width: "26",
                                                        height: "26",
                                                        viewBox: "0 0 26 26",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: (0, a.jsx)("path", {
                                                            d: "M25.4091 13.0009C25.4091 19.8539 19.8531 25.41 13 25.41C6.14699 25.41 0.590937 19.8539 0.590937 13.0009C0.590937 6.14785 6.14699 0.591797 13 0.591797C19.8531 0.591797 25.4091 6.14785 25.4091 13.0009ZM12.7226 7.55043C12.6336 7.63872 12.5628 7.74368 12.5144 7.85931C12.466 7.97495 12.4408 8.09899 12.4403 8.22436C12.4398 8.34973 12.464 8.47398 12.5115 8.58999C12.559 8.70601 12.6289 8.81153 12.7172 8.90052L15.8386 12.0463H7.86935C7.61618 12.0463 7.37339 12.1469 7.19438 12.3259C7.01537 12.5049 6.9148 12.7477 6.9148 13.0009C6.9148 13.254 7.01537 13.4968 7.19438 13.6759C7.37339 13.8549 7.61618 13.9554 7.86935 13.9554H15.8386L12.7172 17.1013C12.6289 17.1903 12.5591 17.2959 12.5116 17.412C12.4641 17.5281 12.4399 17.6524 12.4405 17.7778C12.441 17.9033 12.4663 18.0273 12.5148 18.143C12.5633 18.2587 12.6341 18.3636 12.7232 18.4519C12.8123 18.5402 12.9179 18.6101 13.034 18.6576C13.1501 18.7051 13.2744 18.7292 13.3998 18.7287C13.5252 18.7281 13.6493 18.7029 13.765 18.6544C13.8806 18.6059 13.9856 18.5351 14.0739 18.446L18.8102 13.6732C18.9876 13.4944 19.0872 13.2528 19.0872 13.0009C19.0872 12.749 18.9876 12.5073 18.8102 12.3285L14.0739 7.5558C13.9856 7.46661 13.8806 7.39571 13.7648 7.34716C13.6491 7.29861 13.5249 7.27336 13.3994 7.27286C13.2739 7.27236 13.1495 7.29662 13.0333 7.34425C12.9172 7.39188 12.8116 7.46194 12.7226 7.55043Z",
                                                            fill: "currentColor"
                                                        })
                                                    })
                                                })]
                                            })]
                                        })]
                                    })
                                })
                            }, e.id))]
                        }, h ? "true" : "false")]
                    })
                })
            };
            t.Z = c
        },
        8046: function (e, t, i) {
            "use strict";
            var a = i(5893),
                s = i(7294),
                r = i(9244),
                n = i(5160);
            let o = e => {
                let {
                    showTitle: t = !0,
                    type: i = "faq",
                    queries: o = [{
                        id: 1,
                        question: "What is the status of the project?",
                        answer: "We are at the early stage and while our liquidity may be limited, your support by using even a small amount of tokens is crucial to our growth journey."
                    }, {
                        id: 2,
                        question: "What blockchain are you supporting?",
                        answer: "We support Sui and Aptos chains as of now. We may consider expanding to other blockchains, especially Move-based blockchains."
                    }, {
                        id: 3,
                        question: "How does AI work in DeFi?",
                        answer: "AI is used to produce constant variables that matter for each DeFi service. For instance, in liquid staking, the engine collects unstructured data like news feeds combines with structured data like current staked amounts and trading volume and uses AI to determine the best validator to stake with."
                    }, {
                        id: 6,
                        question: "How JumpSUIt DEX works?",
                        answer: "JumpSUIt decentralized exchange is based on custom weight AMM, which allows anyone wanting to list tokens to set custom weights. This can help reduce initial capital on settlement assets like USDC or SUI by around 3x to 5x."
                    }, {
                        id: 7,
                        question: "Has your smart contract been audited?",
                        answer: "The smart contract is currently being audited by the audit team at Tamago Labs. We will post the report on the website once it's completed."
                    }, {
                        id: 9,
                        question: "How can I contact your team?",
                        answer: "DM us on Twitter/X account or send us an email at support@tamagolabs.com."
                    }]
                } = e, [l, c] = (0, s.useState)(0);
                return (0, a.jsxs)("section", {
                    className: "py-14 lg:pt-[100px]",
                    children: [(0, a.jsxs)("div", {
                        className: "container",
                        children: [(0, a.jsxs)("div", {
                            className: "heading text-center",
                            children: [(0, a.jsx)("div", {
                                className: " mb-3 text-lg font-extrabold text-secondary sm:mb-4",
                                children: "FAQs"
                            }), (0, a.jsxs)("h4", {
                                children: ["Frequently Asked ", (0, a.jsx)("span", {
                                    className: "restaurent" === i.toLowerCase() ? "!text-secondary" : "",
                                    children: "Questions"
                                })]
                            })]
                        }), (0, a.jsx)("div", {
                            className: "mx-2 sm:mx-auto lg:w-[730px]",
                            children: o.map((e, t) => (0, a.jsxs)("div", {
                                className: "mt-6 border-0 border-b-2 border-gray/20 bg-transparent",
                                children: [(0, a.jsxs)("button", {
                                    type: "button",
                                    className: "relative !flex w-full items-center justify-between gap-2 py-2.5 text-lg font-bold text-black ltr:text-left rtl:text-right dark:text-white",
                                    onClick: () => c(l === t ? null : t),
                                    children: [(0, a.jsx)("div", {
                                        children: e.question
                                    }), (0, a.jsx)("div", {
                                        className: "grid h-6 w-6 flex-shrink-0 place-content-center rounded-full border-2 border-gray text-gray transition ".concat(l === t ? "!border-black !text-black dark:!border-white dark:!text-white" : ""),
                                        children: (0, a.jsxs)("svg", {
                                            width: "12",
                                            height: "12",
                                            viewBox: "0 0 12 12",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [(0, a.jsx)("path", {
                                                className: l === t ? "hidden" : "",
                                                d: "M6.09961 0.500977C6.65189 0.500977 7.09961 0.948692 7.09961 1.50098L7.09961 10.501C7.09961 11.0533 6.65189 11.501 6.09961 11.501H5.89961C5.34732 11.501 4.89961 11.0533 4.89961 10.501L4.89961 1.50098C4.89961 0.948692 5.34732 0.500977 5.89961 0.500977H6.09961Z",
                                                fill: "currentColor"
                                            }), (0, a.jsx)("path", {
                                                d: "M0.5 5.90039C0.5 5.34811 0.947715 4.90039 1.5 4.90039H10.5C11.0523 4.90039 11.5 5.34811 11.5 5.90039V6.10039C11.5 6.65268 11.0523 7.10039 10.5 7.10039H1.5C0.947715 7.10039 0.5 6.65268 0.5 6.10039V5.90039Z",
                                                fill: "currentColor"
                                            })]
                                        })
                                    })]
                                }), (0, a.jsx)(r.Z, {
                                    duration: 600,
                                    height: l === t ? "auto" : 0,
                                    children: (0, a.jsx)("div", {
                                        className: "lg:w-4/5",
                                        children: (0, a.jsx)("p", {
                                            className: "px-0 pb-5 pt-0 text-sm font-bold leading-[18px] text-gray",
                                            children: e.answer
                                        })
                                    })
                                })]
                            }, e.id))
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "grid grid-cols-3 mt-[40px] p-2 mx-auto w-full max-w-[250px] ",
                        children: [(0, a.jsx)(n.QZ, {
                            url: "https://x.com/",
                            bgColor: "#08111f"
                        }), (0, a.jsx)(n.QZ, {
                            url: "https://discord.gg/",
                            bgColor: "#08111f"
                        }), (0, a.jsx)(n.QZ, {
                            url: "https://github.com/",
                            bgColor: "#08111f"
                        })]
                    })]
                })
            };
            t.Z = o
        },
        4186: function (e, t, i) {
            "use strict";
            i.r(t);
            var a = i(5893);
            i(1082);
            var s = i(7471),
                r = i(8046),
                n = i(9008),
                o = i.n(n),
                l = i(5152),
                c = i.n(l);
            c()(() => i.e(7420).then(i.bind(i, 7420)), {
                loadableGenerated: {
                    webpack: () => [7420]
                },
                ssr: !1
            });
            let d = c()(() => i.e(323).then(i.bind(i, 323)), {
                    loadableGenerated: {
                        webpack: () => [323]
                    },
                    ssr: !1
                }),
                h = c()(() => Promise.all([i.e(9661), i.e(5699)]).then(i.bind(i, 5699)), {
                    loadableGenerated: {
                        webpack: () => [5699]
                    },
                    ssr: !1
                }),
                m = e => (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(o(), {
                        children: (0, a.jsx)("title", {
                            children: "JumpSUIt - Seamless DeFi on MoveVM powered by AI"
                        })
                    }), (0, a.jsx)("div", {
                        className: ""
                    }), (0, a.jsx)(h, {}), (0, a.jsx)(d, {}), (0, a.jsx)("div", {
                        className: "",
                        children: (0, a.jsx)(s.Z, {
                            title1: "",
                            title2: "Partnership",
                            className: "bg-black bg-left-top bg-no-repeat py-10 dark:bg-gray-dark lg:py-20",
                            type: "modern-saas",
                            blogs: [{
                                id: 4,
                                thumbnail: "banner.png",
                                title: "Title",
                                excerpt: "Partnership Description",
                                description: "",
                                date: "NAME",
                                tag: "Design",
                                href: ""
                            }, {
                                id: 6,
                                thumbnail: "banner.png",
                                title: "Title",
                                excerpt: "Partnership Description",
                                description: "",
                                date: "NAME",
                                tag: "Design",
                                href: ""
                            }, {
                                id: 7,
                                thumbnail: "banner.png",
                                title: "Title",
                                excerpt: "Partnership Description",
                                description: "",
                                date: "NAME",
                                tag: "Design",
                                href: ""
                            }]
                        })
                    }), (0, a.jsx)("section", {
                        className: "bg-gradient-to-t from-white to-transparent pb-8 dark:bg-none ",
                        children: (0, a.jsx)(r.Z, {
                            showTitle: !0
                        })
                    })]
                });
            t.default = m
        }
    },
    function (e) {
        e.O(0, [6760, 2726, 9774, 2888, 179], function () {
            return e(e.s = 8312)
        }), _N_E = e.O()
    }
]);