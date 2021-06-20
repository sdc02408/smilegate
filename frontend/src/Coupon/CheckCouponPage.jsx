import axios from "axios";
import React, { useEffect } from "react";
import NavPage from "./NavPage";
import "../App.css";
import { Input, Button } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function CheckCouponPage() {
  const [getcoupon, setGetcoupon] = React.useState("");
  const [couponData, setCouponData] = React.useState("");
  const [couponFormat, setCouponFormat] = React.useState("");
  //핸드폰 번호 입력 받기
  const checkCoupon = (e) => {
    setGetcoupon(e.target.value);
  };

  //핸드폰 번호 입력 후 조회하기
  const getBtn = () => {
    axios({
      method: "get",
      url: "http://localhost:8080/coupons/" + getcoupon,
    })
      .then((response) => {
        setCouponData(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //쿠폰 ####-####-#### 포맷
  useEffect(() => {
    if (couponData !== "" && couponData !== undefined) {
      let coupons = couponData.coupon_num.replace(/(.{4})/g, "$1-");
      setCouponFormat(coupons.slice(0, -1));
    }
  }, [couponData]);

  return (
    <div className="PageDiv">
      <NavPage />
      <div className="PageBox">
        <div className="pageBoxTitle">쿠폰 조회하기 페이지입니다.</div>
        <div className="pageBoxInputLabel">휴대폰 번호를 입력하세요</div>

        <div className="pageBoxInputDiv">
          <Input
            className="PhoneInput"
            type="text"
            name="id"
            value={getcoupon}
            onChange={checkCoupon}
          />
          <Button variant="contained" color="primary" onClick={getBtn}>
            조회
          </Button>
        </div>

        {couponData !== undefined ? (
          <TableContainer className="TableDiv">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>발급된 쿠폰의 순번</TableCell>
                  <TableCell>휴대폰 번호</TableCell>
                  <TableCell>쿠폰 번호</TableCell>
                  <TableCell>발급 일시</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <TableCell>{couponData.id}</TableCell>
                  <TableCell>{couponData.phone}</TableCell>
                  <TableCell>{couponFormat}</TableCell>
                  <TableCell>{couponData.insert_date}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <div className="ErrorMessage">일치하는 휴대폰 번호가 없습니다.</div>
        )}
      </div>
    </div>
  );
}

export default CheckCouponPage;
