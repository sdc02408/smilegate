package com.example.smilegate.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.smilegate.mapper.CouponMapper;
import com.example.smilegate.vo.CouponVO;
import java.util.List;

@CrossOrigin(origins="*", maxAge = 3600)
@RestController
@RequestMapping("/coupons")
public class CouponController {

    @Autowired
    CouponMapper couponMapper;

    @GetMapping
    public List<CouponVO> couponList(){
        return couponMapper.couponList();
    }

    @PostMapping
    void insertCoupon(@RequestBody CouponVO coupon){
        couponMapper.insertCoupon(coupon);
    }

    @GetMapping("/{phone}")
    public List<CouponVO> fetchCouponByID(@PathVariable String phone) throws Exception{

        return couponMapper.fetchCouponByID(phone);
    }

}
