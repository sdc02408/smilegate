import React from "react";
import axios from "axios";
import NavPage from "./NavPage";
import "../App.css";
import { Input, Button } from "@material-ui/core";

function AddPage() {
  const [phone, setPhone] = React.useState("");

  //핸드폰 번호 입력 받기
  const phoneOnchange = (e) => {
    setPhone(e.target.value);
  };

  //핸드폰 번호 입력 후 쿠폰 생성
  const savebtn = (e) => {
    let chars =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let string_length = 12;
    let randomstring = "";
    for (let i = 0; i < string_length; i++) {
      let rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum, rnum + 1);
    }

    // 중복 쿠폰 조회
    axios({
      method: "get",
      url: "http://localhost:8080/couponsCheck/" + randomstring,
    })
      .then((response) => {
        let checkCouponArr = response.data;

        //중복된 쿠폰이 없을 경우
        if (checkCouponArr.length === 0) {
          //핸드폰 번호 중복 조회
          setTimeout(function () {
            axios({
              method: "get",
              url: "http://localhost:8080/coupons/" + phone,
            })
              .then((response) => {
                //중복된 핸드폰 번호가 없는 경우
                let arr = response.data;
                if (arr.length === 0) {
                  axios({
                    method: "post",
                    url: "http://localhost:8080/coupons",
                    data: {
                      phone: phone,
                      coupon_num: randomstring,
                      insert_date: "",
                    },
                  })
                    .then((response) => {
                      alert("쿠폰이 발급되었습니다.");
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }
                //중복된 핸드폰 번호가 있는 경우
                else if (response.data[0].phone === phone) {
                  alert("이미 쿠폰을 받은 번호입니다.");
                }
              })
              .catch((error) => {
                console.log(error);
              });
          }, 1500);
        }
        //중복된 쿠폰이 존재하는 경우
        else if (checkCouponArr[0].coupon_num === randomstring) {
          //새로운 쿠폰 발행(숫자(0-9), 영대소문자(a-zA-Z)로 구성)
          let chars =
            "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
          let string_length = 12;
          let randomstring = "";
          for (let i = 0; i < string_length; i++) {
            let rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum, rnum + 1);
          }

          console.log(randomstring, "randomsdsdsdsdssd");

          //핸드폰 번호 중복 조회
          setTimeout(function () {
            axios({
              method: "get",
              url: "http://localhost:8080/coupons/" + phone,
            })
              .then((response) => {
                //중복된 핸드폰 번호가 없는 경우
                let arr = response.data;
                if (arr.length === 0) {
                  axios({
                    method: "post",
                    url: "http://localhost:8080/coupons",
                    data: {
                      phone: phone,
                      coupon_num: randomstring,
                      insert_date: "",
                    },
                  })
                    .then((response) => {
                      alert("쿠폰이 발급되었습니다.");
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }
                //중복된 핸드폰 번호가 있는 경우
                else if (response.data[0].phone === phone) {
                  alert("이미 쿠폰을 받은 번호입니다.");
                }
              })
              .catch((error) => {
                console.log(error);
              });
          }, 1500);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="PageDiv">
      <NavPage />
      <div className="PageBox">
        <div className="pageBoxTitle">
          사전예약 쿠폰 번호 발급 페이지입니다.
        </div>
        <div className="pageBoxInputLabel">휴대폰 번호를 입력하세요</div>

        <div className="pageBoxInputDiv">
          <Input
            className="PhoneInput"
            type="text"
            name="phone"
            value={phone}
            onChange={phoneOnchange}
          />

          <Button variant="contained" color="primary" onClick={savebtn}>
            저장
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddPage;
