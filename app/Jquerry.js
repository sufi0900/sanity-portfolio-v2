"use client";
import { useEffect } from "react";
import $ from "jquery";
export const Jquerry = () => {
  useEffect(() => {
    $(".form__btn").click(function () {
      $(".mail__letter").toggleClass("move");
      $(".mail__top").toggleClass("closed");
      $(".form__btn--invisible").toggleClass("visible");
      $(".form__btn--visible").toggleClass("invisible");
    });
    $("input").focus(function () {
      $(this).parent().addClass("active");
      $("input").focusout(function () {
        if ($(this).val() === "") {
          $(this).parent().removeClass("active");
        } else {
          $(this).parent().addClass("active");
        }
      });
    });
    $("textarea").focus(function () {
      $(this).parent().addClass("active");
      $("textarea").focusout(function () {
        if ($(this).val() === "") {
          $(this).parent().removeClass("active");
        } else {
          $(this).parent().addClass("active");
        }
      });
    });
  });
};
