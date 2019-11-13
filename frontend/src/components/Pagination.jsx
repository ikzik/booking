import React from "react";



const Pagination = ({data, pages, page, setPage}) => {
    const firstPage = data.cars.page < 3 ? 1 : data.cars.page - 2 ;
    const lastPage = firstPage + pages > data.cars.totalPages ? data.cars.totalPages : firstPage + pages;
    const pagination = [];
    
    for(let i = firstPage; i < lastPage; i++) {
        pagination.push( <li className={page == i ? 'active' : 'bcrm_paginator_page'} key={i}>
            <a className="page-btn" href="#" onClick={() => setPage(i)}>
                <span>{i}</span>
            </a>
        </li>)
    }
    return (
        <div className="container-fluid pager">
            <div className="row">
                <div className="col-md-12">
                    <nav>
                        <ul id="bcrm_paginator_all" className="pagination">
                            {data.cars.page > 1 && 
                                <li onClick={() => setPage(data.cars.page-1)}>
                                    <a className="bcrm_paginator_pn" href="#">
                                        <span>{'<<<'}</span>
                                    </a>
                                </li>
                            }
                            { pagination
                            }
                             {data.cars.totalPages > data.cars.page + 1 && 
                                <li onClick={() => setPage(data.cars.page+1)}>
                                    <a className="bcrm_paginator_pn" href="#">
                                        <span>{'>>>'}</span>
                                    </a>
                                </li>
                            }
                        </ul>
                    </nav>
                    </div>
            </div>
        </div>
    );
}

export default Pagination;