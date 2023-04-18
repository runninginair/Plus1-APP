import React from "react";
import HomeNav from "../home-nav/navhome.js";


const LoginComponent = () => {

    return (
        <div>
            <center><br />
                {<HomeNav />}<br />
                <img className="rounded-image" height={100} width={100}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEXaSDX////88fDYOB/21dHaRTDeYVP22dfaRjPYPCXZQS3YNRvbSjb55OLlhXvvt7H++PfdWUjjgHbbTTvnjoTyyMTYOyPtrKX76+ngbF/us6zhcWTWJADdXU70zsreYlXrpZ7xwLrieGvpmJDqnpbXLQvcUkDmi4Fg19wyAAADGElEQVR4nO3c61biMBRA4WKJpKnFKhpvgyje3v8NZ2aJzEiTptUZzDnu/Tek9lu4QpYNFhPtFV99A/89hPJDKD+E8kMoP4TyQyi/7yc8mEovJZz+KGVXH6SEZSE6axAizD2ECPMPIcL8Q4gw/xAizD+ECPMPIcL8Q4gw/xAizD+ECPMPIcL8EyW0rpNNTxIktMv56U7zRZIoSVjeTjqtTGqWIKE5abvCQ03C6qILVCW0NvAWqhJWdwGgJqE1IaAmYXmvXOjWQaAeoXWXyoX1fRioRli9RIBahG4VAyoRBrdrmoRmEVlltAiNaeJADUK36AMqEFaHu/enTFiu44uMBqGtH/p90oXOnaeAooXWr3o+JRQITfmY9gkW2up5NgQoVmh8cokRLbTl1bA3UKjQVkfHQ30Shbbyj4kPedFC4xejfMKE1pWr63E+WUJrzwavL0KFJ+N90oRjf0MRbq4rRNgq+Itwr7Bddr5Vr0t4uXqKrLNKhLNnV6oWHntTaBa2L7UtNAubw+r3qF7hRfVKyFVoqk3pw1lBYXPlNzMzFZr1bNPRgPNnXeGdd2+jmQrd/O0iHxHeLv2fWQqFzdr/ffPqhM38yb0bVSZsXkq3M6pKOD2tugdj9Qjb+6UPHfzVIfy1xT7zPnzLKoTPD8s6em5bg7CwruduVQh7QxgPIcLeEI4IYTyECHtDOCKE8RAOE7o62NPp20XK8AvKwfAvFrr5ZRNs+1gzPNzM0l9yzUR4Fv7xyVqECBEiRPhp4USK0Nwch9v+E4TI+PXgvc5X72m2z3rfV2/3NJUPv0LKniaWon1pJIQjQhgPIcLeEI4IYTyECHtDOCKE8RAi7A3hiBDGQ4iwN/1Cc3N7/ppWYWH8ps8CsxX+uxDGQ4hwXyGMhxDhvkIYDyHCfYUwHkKE+wphPDHCaRtKkdCehDtKzxQiLGy4AROlCD8cQoT5hxBh/iFEmH8IEeYfQoT5hxBh/iFEmH8IEeYfQoT5hxBh/iH8HsLI41cppYW1kZ1LCScH0tsFdYTqQig/hPJDKD+E8kMoP4TyQyi/ny2dk4Tly5IFAAAAAElFTkSuQmCC"
                    alt="+1 logo" /><br /><br />

                <h3>User Name: </h3>
                <input type="text" />

                <h3>Password: </h3>
                <input type="text" /><br /><br /><br />
                <div>
                    <a href="/user">
                        <button className="btn btn-danger fw-bolder"> Login </button>
                    </a>
                </div>
                {/* <pre> {JSON.stringify(object, null, 2)} </pre> */}
            </center>
        </div>
    );
}

export default LoginComponent;