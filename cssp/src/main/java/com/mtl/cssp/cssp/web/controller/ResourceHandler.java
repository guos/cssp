package com.mtl.cssp.cssp.web.controller;

import java.util.concurrent.TimeUnit;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.CacheControl;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//@Configuration
public class ResourceHandler implements WebMvcConfigurer {

		/**
		 * 配置静态访问资源
		 * 
		 * @param registry
		 */
		@Override
		public void addResourceHandlers(ResourceHandlerRegistry registry) {
			registry.addResourceHandler("/static/**")//设置哪些静态资源不缓存
					.addResourceLocations("classpath:/static/")
					.setCacheControl(
		                    CacheControl.maxAge(0, TimeUnit.SECONDS)
		                    .cachePublic());
					//.setCacheControl(CacheControl.noStore());//用 noStore 才起效
		}

}
