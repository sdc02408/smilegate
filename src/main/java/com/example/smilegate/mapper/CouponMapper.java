package com.example.smilegate.mapper;

import com.example.smilegate.vo.CouponVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CouponMapper {

    List<CouponVO> couponList();
    List<CouponVO> fetchCouponByID(String phone);
    List<CouponVO> fetchCoupon(String coupon_num);
    void insertCoupon(CouponVO coupon);

}
