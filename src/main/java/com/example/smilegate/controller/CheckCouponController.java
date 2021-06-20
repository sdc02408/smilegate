package com.example.smilegate.controller;

import com.example.smilegate.mapper.CouponMapper;
import com.example.smilegate.vo.CouponVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="*", maxAge = 3600)
@RestController
@RequestMapping("/couponsCheck")
public class CheckCouponController {

    @Autowired
    CouponMapper couponCheckMapper;

    @GetMapping("/{coupon_num}")
    public List<CouponVO> fetchCoupon(@PathVariable String coupon_num) throws Exception{
        return couponCheckMapper.fetchCoupon(coupon_num);
    }
}
